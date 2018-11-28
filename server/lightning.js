const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')
const {readFileSync} = require('fs')
const Payment = require('./db/payment')

// Due to updated ECDSA generated tls.cert we need to let gprc know that
// we need to use that cipher suite otherwise there will be a handhsake
// error when we communicate with the lnd rpc server.
process.env.GRPC_SSL_CIPHER_SUITES = 'HIGH+ECDSA'
const lndCertLocation = process.env.lndCert || ''
const lndAdminMacaroonLocation = process.env.lndAdminMacaroonLocation || ''

const lndCert = readFileSync(lndCertLocation)
const sslCreds = grpc.credentials.createSsl(lndCert)
const macaroon = readFileSync(lndAdminMacaroonLocation).toString('hex')
const metadata = new grpc.Metadata()
metadata.add('macaroon', macaroon)
const macaroonCreds = grpc.credentials.createFromMetadataGenerator(
  (_args, callback) => callback(null, metadata)
)

const credentials = grpc.credentials.combineChannelCredentials(sslCreds, macaroonCreds)
const packageDefinition = protoLoader.loadSync('rpc.proto')
const {lnrpc} = grpc.loadPackageDefinition(packageDefinition)
const lightning = new lnrpc.Lightning('localhost:10009', credentials)

const subscription = lightning.subscribeTransactions({})
subscription
  .on('data', async (invoice) => {
    console.log('subscription data', invoice)
    try {
      console.log(invoice)
    } catch (error) {
      console.error(error)
    }
  })
  .on('end', () => {
    console.log('ended invoice subscription')
  })
  .on('status', status => {
    console.log('Current status' + status)
  })

module.exports = (server) => {
  server
    .get('/node', (req, res) => {
      lightning.getInfo({}, (err, {identityPubkey}) => {
        if (err) {
          res.status(500).send('Server error')
        }
        res.send(`${identityPubkey}@${req.connection.remoteAddress}:${9735}`) // this is a guess
      })
    })
    // check if an invoice has been paid yet
    .get('/checkInvoice/:bolt11', async (req, res) => {
      try {
        const payment = await Payment.Model.findOne({payment_request: req.params.bolt11})
        res.status(200).json({ paid: true, payment })
        // if (payment.status === Payment.StatusOptions.complete) {
        //   res.status(200).json({paid: true})
        // } else {
        //   res.status(200).json({paid: false})
        // }
      } catch (error) {
        res.status(500).send('Server error')
      }
    })
    .get('/invoice', (_, res) => {
      const value = 19000
      lightning.addInvoice({
        value,
      }, async (error, invoice) => {
        if (error) {
          res.status(500).send(error)
        } else {
          try {
            const payment = await Payment.Model.create({
              add_index: invoice.addIndex.toString(),
              amount: value,
              payment_request: invoice.paymentRequest,
            })
            console.log('created and saved', payment)
            res.status(200).send(invoice.paymentRequest)
          } catch (error) {
            console.error('error saving payment')
            res.status(500).json({error})
          }
        }
      })
    })
}

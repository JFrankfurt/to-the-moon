import * as protoLoader from '@grpc/proto-loader'
import { Express } from 'express'
import { readFileSync } from 'fs'
import * as grpc from 'grpc'
// import Payment from './db/payment'

// Due to updated ECDSA generated tls.cert we need to let gprc know that
// we need to use that cipher suite otherwise there will be a handhsake
// error when we communicate with the lnd rpc server.
process.env.GRPC_SSL_CIPHER_SUITES = 'HIGH+ECDSA'

const lndCert = readFileSync(process.env.lndCert)
const sslCreds = grpc.credentials.createSsl(lndCert)
const macaroon = readFileSync(process.env.lndAdminMacaroon).toString('hex')
const metadata = new grpc.Metadata()
metadata.add('macaroon', macaroon)
const macaroonCreds = grpc.credentials.createFromMetadataGenerator(
  (_args, callback) => callback(null, metadata)
)

const credentials = grpc.credentials.combineChannelCredentials(
  sslCreds,
  macaroonCreds
)
const packageDefinition = protoLoader.loadSync('rpc.proto')
const { lnrpc } = grpc.loadPackageDefinition(packageDefinition)
const lightning = new lnrpc.Lightning('lnd:10009', credentials)

// const subscription = lightning.subscribeInvoices({})
// subscription
//     .on('data', async (invoice) => {
//         const {description, id: invoiceId} = invoice
//         console.log(description, invoice, invoiceId)
//         try {
//             const payment = await Payment.findById(description)
//             console.log(payment)
//             // await payment.save()
//         } catch (error) {

//         }
//     })
//     .on('end', () => {
//         // The server has finished sending
//     })
//     .on('status', status => {
//         // Process status
//         console.log('Current status' + status)
//     })

export default (server: Express) => {
  server
    .get('/node', (req, res) => {
      lightning.getInfo({}, response => {
        console.log(response)
        res.send(`@${req.connection.remoteAddress}:${9735}`) // this is a guess
      })
    })
    .get('/invoice', (_, res) => {
      lightning.addInvoice(
        {
          value: 19000,
        },
        (_, { paymentRequest }) => {
          res.status(200).send(paymentRequest)
        }
      )
    })
}

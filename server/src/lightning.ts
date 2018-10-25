import {Express} from 'express'
import * as grpc from 'grpc'
import {readFileSync} from 'fs'

// Due to updated ECDSA generated tls.cert we need to let gprc know that
// we need to use that cipher suite otherwise there will be a handhsake
// error when we communicate with the lnd rpc server.
process.env.GRPC_SSL_CIPHER_SUITES = 'HIGH+ECDSA'

//  Lnd cert is at ~/.lnd/tls.cert on Linux and
//  ~/Library/Application Support/Lnd/tls.cert on Mac
const lndCert = readFileSync('/Users/jordanfrankfurt/Library/Application Support/Lnd/tls.cert');
const credentials = grpc.credentials.createSsl(lndCert);
const lnrpcDescriptor = grpc.load('rpc.proto');
const lnrpc = lnrpcDescriptor.lnrpc;
const lightning = new lnrpc.Lightning('localhost:10009', credentials);

export default (server: Express) => {
    server.get('/', (_, res) => {
        lightning.getInfo({}, (_, response) => res.send(response))
    })
}

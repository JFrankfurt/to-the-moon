const Payment = require('./db/payment')
const WebSocket = require('ws')

module.exports = (server) => {
  const wss = new WebSocket.Server({ port: process.env.WS_PORT });

  wss.on('connection', (ws) => {
    ws.on('message', message => {
        const {payment_request} = JSON.parse(message)
        Payment.Model.findOne({payment_request}, (err, doc) => {
          if (err) {
            console.log(err, 'err')
            ws.send('false')
          } else if (doc.status !== Payment.StatusOptions.complete) {
            ws.send('false')
          } else {
            ws.send('true')
          }
        })
    });
  });
  server.get('/', async (_, res) => res.redirect(`/arcade`))
}

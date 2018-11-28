const {Schema, model} = require('mongoose')

const StatusOptions = {
  pendingInvoice: 0,
  pendingPayment: 1,
  complete: 2,
  error: 3,
}

const schemaDefinition = {
  add_index: Number,
  amount: Number,
  memo: String,
  payment_request: String,
  r_hash: String,
  status: {type: Number, default: StatusOptions.pendingInvoice},
}

const paymentSchema = new Schema(schemaDefinition)

const Payment = model('Invoice', paymentSchema)

exports.StatusOptions = StatusOptions
exports.Model = Payment

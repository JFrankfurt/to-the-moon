import { Schema, model } from 'mongoose'

export enum StatusOptions {
  pendingInvoice = 0,
  pendingPayment,
  complete,
  error,
}

const paymentSchema = new Schema({
  add_index: Number,
  amount: Number,
  memo: String,
  payment_request: String,
  r_hash: String,
  status: { type: Number, default: StatusOptions.pendingInvoice },
})

paymentSchema.statics.generateInvoice = function() {}

paymentSchema.methods.checkPayment = function() {}

const Payment = model('Invoice', paymentSchema)

export default Payment

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const walletSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  balance: {
    type: Number,
    required: true,
    default: 0
  },
  expenses: {
    menuPurchase: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'MenuPurchase'
    },
    laundryService: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'LaundryService'
    }
  }
},
  { timestamps: true }
)


const Wallet = mongoose.model('Wallet', walletSchema);

module.exports = Wallet;

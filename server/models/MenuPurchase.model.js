const mongoose = require('mongoose')
const Schema = mongoose.Schema


const menuPurchaseSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  dish: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Food'
  }],
  date: {
    type: Date,
    required: true,
    default: Date.now()
  }
},
  { timestamps: true }
)


const MenuPurchase = mongoose.model('MenuPurchase', menuPurchaseSchema);

module.exports = MenuPurchase;

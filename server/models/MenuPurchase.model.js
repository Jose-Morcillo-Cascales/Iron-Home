const { Schema, model } = require("mongoose");


const menuPurchaseSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  firstDish: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Food'
  },
  secondDish: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Food'
  },
  dessert: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Food'
  },
  date: {
    type: Date,
    required: true,
    default: Date.now()
  },
  quantity: {
    type: Number
  }
},
  { timestamps: true }
)


const MenuPurchase = model('MenuPurchase', menuPurchaseSchema);

module.exports = MenuPurchase;

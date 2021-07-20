const { Schema, model } = require("mongoose");


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
    },
    roomService: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'RoomService'
    }
  }
},
  { timestamps: true }
)


const Wallet = model('Wallet', walletSchema);

module.exports = Wallet;

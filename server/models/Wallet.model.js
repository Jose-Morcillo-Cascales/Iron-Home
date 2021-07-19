const { Schema, model } = require("mongoose");


const walletRoomSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  balance: {
    Type: Number,
    required: true,
    default: 0
  },
  expenses: [{
    type: {
      Type: String,
      enum: ['food', 'room', 'laundry']
    },
    amount: {
      Type: Number,
      required: true,
      default: 0
    }

  }]
},
  { timestamps: true }
)


const Wallet = model('Wallet', walletRoomSchema);

module.exports = Wallet;

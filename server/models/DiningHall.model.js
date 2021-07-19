const { Schema, model } = require("mongoose");


const diningHallRoomSchema = new Schema({


  food: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Food'
  }],
  voucher: {
    price: {
      type: Number,
      required: true,

    },
    quantity: {
      type: Number,
      enum: [10, 20, 30],
      default: 10
    },

  },
  date: {
    Type: Date,
    required: true,
    default: Date.now()
  }
},
  { timestamps: true }
)


const DiningHall = model('DiningHall', diningHallRoomSchema);

module.exports = DiningHall;

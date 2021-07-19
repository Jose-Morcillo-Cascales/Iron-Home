const { Schema, model } = require("mongoose");


const laundryRoomSchema = new Schema({
  food: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Food'
  }],
  voucher: {
    price: {
      type: Number,
      required: true,

    },
    frecuency: {
      type: Number,
      enum: [1, 2, 4],
      default: 1
    },
  },
  date: {
    Type: Date,
    required: true,
    default: Date.now()
  },
  type: {
    dark: {
      type: Boolean,
      required: true,
      default: false
    },
    delicate: {
      type: Boolean,
      required: true,
      default: false
    }
  }
},
  { timestamps: true }
)


const Laundry = model('Laundry', laundryRoomSchema);

module.exports = Laundry;

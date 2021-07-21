const { Schema, model } = require("mongoose");


const roomSchema = new Schema({
  number: {
    type: String,
    required: true
  },
  description: {
    type: String,
    minLegth: 1,
    maxLength: 250,
    required: true,
    set: value => value.charAt(0).toUpperCase() + value.substring(1)
  },
  bath: {
    type: Boolean,
    required: true,
    default: false
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  image: {
    type: [String],
    required: true,
    default: ['https://image.flaticon.com/icons/png/512/1200/1200919.png']
  },
  capacity: {
    type: Number,
    required: true,
    default: 0
  },
  type: {
    type: String,
    enum: ['single', 'double'],
    default: 'single'
  },
  period: {
    first: {
      type: Boolean,
      required: true,
      default: true
    },
    second: {
      type: Boolean,
      required: true,
      default: true
    },
    third: {
      type: Boolean,
      required: true,
      default: true
    },
    fourth: {
      type: Boolean,
      required: true,
      default: true
    },
    fifth: {
      type: Boolean,
      required: true,
      default: true
    }
  }
},
  { timestamps: true }
)


const Room = model('Room', roomSchema);

module.exports = Room;

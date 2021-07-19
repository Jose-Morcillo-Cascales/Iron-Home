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
    required: true
  },
  image: {
    type: [String],
    required: true,
    default: 'https://image.flaticon.com/icons/png/512/1200/1200919.png'
  },
  Type: {
    type: String,
    enum: ['single', 'share'],
    default: 'single'
  },
},
  { timestamps: true }
)


const Room = model('Room', roomSchema);

module.exports = Room;

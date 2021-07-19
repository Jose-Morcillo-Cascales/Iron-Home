const { Schema, model } = require("mongoose");


const bookingRoomSchema = new Schema({
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room'
  },
  arrivals: {
    Type: Date,
    required: true,
    default: Date.now()
  },
  departures: {
    Type: Date,
    required: true,
    default: Date.now()
  }
},
  { timestamps: true }
)


const BookingRoom = model('BookingRoom', bookingRoomSchema);

module.exports = BookingRoom;

const { Schema, model } = require("mongoose");


const bookingRoomSchema = new Schema({
  library: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Library'
  },
  date: {
    Type: Date,
    required: true,
    default: Date.now()
  },
  time: {
    Type: Date,
    required: true,
    default: Date.now()
  },
  term: {
    Type: Number,
    enum: [30, 60, 90, 120],
    default: 30,
  }
},
  { timestamps: true }
)


const BookingRoom = model('BookingRoom', bookingRoomSchema);

module.exports = BookingRoom;

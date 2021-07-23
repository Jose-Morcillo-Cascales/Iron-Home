const mongoose = require('mongoose')
const Schema = mongoose.Schema


const libraryBookingSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  library: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Library'
  },
  initDate: {
    type: Date,
    required: true,
    default: Date.now()
  }
},
  { timestamps: true }
)


const LibraryBooking = mongoose.model('LibraryBooking', libraryBookingSchema);


module.exports = LibraryBooking;

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const BookingRoomSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    },
    period: {
        type: String
    }
},
    { timestamps: true }
)


const BookingRoom = mongoose.model('BookingRoom', BookingRoomSchema);


module.exports = BookingRoom;

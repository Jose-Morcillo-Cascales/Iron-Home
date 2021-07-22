const { Schema, model } = require("mongoose");


const BookingRoomSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    room: {
        type: Schema.Types.ObjectId,
        ref: 'Room'
    }
},
    { timestamps: true }
)


const BookingRoom = model('BookingRoom', BookingRoomSchema);


module.exports = BookingRoom;

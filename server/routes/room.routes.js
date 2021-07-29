const router = require("express").Router();
const BookingRoom = require('./../models/BookingRoom.model')
const Room = require('./../models/Room.model')
const { checkLoggedUser } = require('./../middleware')


//List available rooms
router.get('/available/rooms', checkLoggedUser, (req, res) => {

  Room
    .find({
      $or: [
        { "period.first": true },
        { "period.second": true },
        { "period.third": true },
        { "period.fourth": true },
        { "period.fifth": true }
      ]
    })
    .then(rooms => res.json(rooms))
    .catch(err => res.json({ message: 'Ha ocurrido un error', err }))
})


//Create booking
router.post('/bookingRoom', checkLoggedUser, (req, res) => {

  const user = req.session.currentUser._id
  const { room_id, period_request, capacity_room } = req.query

  let roomLeft = true

  BookingRoom
    .find({ room: room_id })
    .then(response => {

      response.lenght === capacity_room ? roomLeft = false : roomLeft

      return BookingRoom.create({ room: room_id, user, period: period_request })
    })
    .then(response => {

      let availability

      !roomLeft ? availability = false :
        availability = true

      const periodProperty = `period.${period_request}`

      return Room.findByIdAndUpdate(response.room, { [periodProperty]: availability })
    })
    .then(() => res.json({ code: 200, message: 'Habitación reservada' }))
    .catch(err => res.json({ message: 'Ha ocurrido un error ', err }))
})

//Room Options
router.get('/roomOptions', (req, res) => {

  Room
    .find({
      $or: [
        { _id: '60f7005b28ad7467b8676fa0' },
        { _id: '60f7074328ad7467b8676fb6' },
        { _id: '60f70a6428ad7467b8676fca' },
        { _id: '60f70c1628ad7467b8676fe4' }
      ]
    })
    .select('image _id name')
    .then(rooms => res.json(rooms))
    .catch(err => res.json({ message: 'Ha ocurrido un error ', err }))
})

//Datails room
router.get('/datails/:room_id', (req, res) => {

  const { room_id } = req.params

  Room
    .findById(room_id)
    .then(rooms => res.json(rooms))
    .catch(err => res.json({ message: 'Ha ocurrido un error ', err }))
})

//RoomConfirmation
router.post('/userBooking', (req, res) => {

  const user = req.session.currentUser._id

  BookingRoom
    .findOne({ user })
    .then(book => res.json(book))
    .catch(err => res.json({ message: 'Ha ocurrido un error ', err }))
})

//Create Rooms
router.post('/createRoom', (req, res) => {

  const { number, description, bath, price, capacity, type, image } = req.body

  Room
    .create({ number, description, bath, price, capacity, type, image })
    .then(() => res.json({ code: 200, message: 'Room created' }))
    .catch(err => res.status(500).json({ code: 500, message: 'DB error while creating Room', err }))
})


module.exports = router;

const router = require("express").Router();
const BookingRoom = require('./../models/BookingRoom.model')
const Room = require('./../models/Room.model')
const { checkLoggedUser } = require('./../middleware')


//List available rooms
router.get('/:period_request', checkLoggedUser, (req, res) => {

  const { period_request } = req.params

  Room
    .find({ 'period.first': true, 'period.second': true, 'period.third': true, 'period.fourth': true, 'period.fifth': true })
    .then(bookings => {

      period_request ? res.json(bookings) : res.json({ message: 'No available rooms' })
    })
    .catch(err => console.log(err))
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

      const period = {}

      !roomLeft ? period[period_request] = false :
        period[period_request] = true

      return Room.findByIdAndUpdate(response.room, { period })
    })
    .then(() => res.json({ code: 200, message: 'Room booked' }))
    .catch(err => console.log(err))
})


//Datails room
router.get('/:room_id', (req, res) => {

  const { room_id } = req.params

  Room
    .findById(room_id)
    .then(response => res.json(response))
    .catch(err => console.log(err))
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

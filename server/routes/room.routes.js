const router = require("express").Router();
const BookingRoom = require('./../models/BookingRoom.model')
const Room = require('./../models/Room.model')


//List available rooms
router.get('/:period_request', checkLoggedUser, (req, res) => {

  const { period_request } = req.params

  Room
    .find({ 'period.first': true, 'period.second': true, 'period.third': true, 'period.fourth': true, 'period.fifth': true })
    .then(bookings => {
      period_request ?
        res.json(bookings) : res.json({ message: 'No available rooms' })
    })
    .catch(err => console.log(err))
})

//Create booking
router.post('/bookingRoom', checkLoggedUser, (req, res) => {

  const user = req.session.currentUser._id
  const { id_room, period_request, capacity_room } = req.query
  let roomLeft = true

  BookingRoom
    .find({ room: id_room })
    .then(response => {
      response.lenght === capacity_room ? roomLeft = false : roomLeft
      return BookingRoom.create({ room: id_room, user, period: period_request })
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
router.get('/:id_room', checkLoggedUser, (req, res) => {

  const { id_room } = req.params

  Room
    .findById(id_room)
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

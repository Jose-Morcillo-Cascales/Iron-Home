const router = require("express").Router();
const { response } = require("express");
const { find } = require("./../models/BookingRoom.model");
const BookingRoom = require('./../models/BookingRoom.model')
const Room = require('./../models/Room.model')


//List available rooms
router.get('/:period_request', (req, res) => {

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
router.post('/bookingRoom/:id_room/:period_request/:capacity_room', (req, res) => {

  const user = req.session.currentUser._id

  const { id_room, period_request, capacity_room } = req.params

  // const period = {}
  // switch(period_request) {
  //   case "period.first":
  //     period.first = false
  //     break;
  //   case "period.second":
  //     period.second = false
  // }

  //comprobar si hacemos el booking

  BookingRoom
    .find({ room: id_room })
    .then(response => response.lenght === 2)

  //creas variable de si aun esta roomLeft
  ///////correcto, creamos el booking
  BookingRoom
    .create({ room: id_room, user })
    .then(response => {
      //response.room === capacity_room
      const period = {}
      //if(!roomLeft)
      period[period_request] = false
      /*else {
        period[period_request] = true
      }
      */
      Room
        .findByIdAndUpdate(response.room, { period })
        .then(elm => {
          res.json({ code: 200, message: 'Room booked' })
        })
    })
    .catch(err => console.log(err))
})



router.post('/create', (req, res) => {

  const { number, description, bath, price, capacity, type, image } = req.body

  Room
    .create({ number, description, bath, price, capacity, type, image })
    .then(() => res.json({ code: 200, message: 'Room created' }))
    .catch(err => res.status(500).json({ code: 500, message: 'DB error while creating Room', err }))
})



module.exports = router;

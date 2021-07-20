const router = require("express").Router();
const User = require('./../models/User.model')
const Room = require('./../models/Room.model')


router.post('/create', (req, res) => {

  const { number, description, bath, price, capacity, type, image } = req.body


  Room
    .create({ number, description, bath, price, capacity, type, image })
    .then(() => res.json({ code: 200, message: 'Room created' }))
    .catch(err => res.status(500).json({ code: 500, message: 'DB error while creating Room', err }))
})



module.exports = router;

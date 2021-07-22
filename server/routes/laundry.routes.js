const router = require("express").Router()
const LaundryService = require('./../models/LaundryService.model')



router.post('/create', (req, res) => {
  const user = req.session.currentUser._id
  const type = {
    dark: req.body.dark ? true : false,
    delicate: req.body.delicate ? true : false
  }
  const { bookingDate } = req.body

  LaundryService
    .create({ bookingDate, user, type })
    .then(() => res.json({ code: 200, message: 'Room created' }))
    .catch(err => res.status(500).json({ code: 500, message: 'DB error while creating Room', err }))
})

module.exports = router;

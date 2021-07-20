const router = require("express").Router()
const User = require('./../models/User.model')
const Wallet = require('./../models/Wallet.model')


//FIND USER
router.get('/', (req, res) => {

  const user_id = req.session.currentUser._id

  User
    .findById(user_id)
    .then(response => res.json(response))
    .catch(err => res.status(500).json({ code: 500, message: 'Error fetching user', err }))
})


//FIND WALLET
router.get('/wallet', (req, res) => {

  const user_id = req.session.currentUser._id

  Wallet
    .findById(user_id)
    .then(response => res.json(response))
    .catch(err => res.status(500).json({ code: 500, message: 'Error fetching wallet', err }))
})





router.put('/edit', (req, res) => {

  const { mail, name, lastName, DNI, phone, image } = req.body
  const { user_id } = req.query

  User
    .findByIdAndUpdate(user_id, { mail, name, lastName, DNI, phone, image })
    .then(response => res.json(response))
    .catch(err => res.status(500).json({ code: 500, message: 'Error editing user', err }))

})


module.exports = router

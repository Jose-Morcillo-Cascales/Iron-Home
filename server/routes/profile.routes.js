const router = require("express").Router()
const User = require('./../models/User.model')
const Wallet = require('./../models/Wallet.model')
const { checkLoggedUser } = require('./../middleware')


//User profile
router.get('/', checkLoggedUser, (req, res) => {

  const user_id = req.session.currentUser._id

  User
    .findById(user_id)
    .then(response => res.json(response))
    .catch(err => res.status(500).json({ code: 500, message: 'Error cargando usuario', err }))
})


//Find wallet
router.get('/wallet', checkLoggedUser, (req, res) => {

  const user_id = req.session.currentUser._id

  Wallet
    .findOne({ user: user_id })
    .select('balance')
    .then(response => res.json(response))
    .catch(err => res.status(500).json({ code: 500, message: 'Error cargando wallet', err }))
})


//Edit profile
router.put('/edit', checkLoggedUser, (req, res) => {

  const { name, lastName, DNI, phone, image } = req.body

  const user_id = req.session.currentUser._id

  User
    .findByIdAndUpdate(user_id, { name, lastName, DNI, phone, image })
    .then(response => { res.json(response) })
    .catch(err => res.status(500).json({ code: 500, message: 'Error editando usuario', err }))

})


module.exports = router

const express = require('express')
const router = express.Router()
const bcrypt = require("bcrypt")
const bcryptSalt = 10
const User = require('./../models/User.model')
const Wallet = require('./../models/Wallet.model')


// Signup (post)
router.post('/signup', (req, res) => {

  const { mail, pwd, name } = req.body

  User
    .findOne({ mail })
    .then(user => {

      if (user) {
        res.status(400).json({ code: 400, message: 'Este email ya ha sido registrado' })
        return
      }

      const salt = bcrypt.genSaltSync(bcryptSalt)
      const hashPass = bcrypt.hashSync(pwd, salt)

      User
        .create({ mail, password: hashPass, name })
        .then(response => {
          return Wallet.create({ user: response.id })
        })
        .then(() => res.json({ code: 200, message: 'Usuario creado' }))
        .catch(err => res.status(500).json({ code: 500, message: 'Ha ocurrido un error mientras se creaba el usuario', err }))
    })
    .catch(err => res.status(500).json({ code: 500, message: 'Ha ocurrido un error mientras se creaba el usuario', err }))
})


// Login (post)
router.post('/login', (req, res) => {

  const { mail, pwd } = req.body

  User
    .findOne({ mail })
    .then(user => {

      if (!user) {
        res.status(401).json({ code: 401, message: 'Usuario no registrado' })
        return
      }

      if (bcrypt.compareSync(pwd, user.password) === false) {
        res.status(401).json({ code: 401, message: 'Contraseña incorrecta' })
        return
      }

      req.session.currentUser = user
      res.json(req.session.currentUser)
    })
    .catch(err => res.status(500).json({ code: 500, message: 'Ha ocurrido un error de inicio de  sesión', err }))
})


router.get('/logout', (req, res) => {
  req.session.destroy((err) => res.json({ mssage: 'Ha cerrado la sesión correctamente' }));
})

router.post('/isloggedIn', (req, res) => {
  req.session.currentUser ? res.json(req.session.currentUser) : res.status(401).json({ code: 401, message: 'No esta autorizado' })
})


module.exports = router
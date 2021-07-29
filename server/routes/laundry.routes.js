const router = require("express").Router()
const LaundryService = require('./../models/LaundryService.model')
const Wallet = require('./../models/Wallet.model')
const { checkLoggedUser } = require('./../middleware')
const { removeBalance, repay, totalTokens } = require('./../utils')


//create laundry
router.post('/bookingService', checkLoggedUser, (req, res) => {

  const user = req.session.currentUser._id
  const type = {
    dark: req.body.dark,
    delicate: req.body.delicate
  }
  const { bookingDate, quantity } = req.body


  Wallet
    .findOne({ user })
    .then(response => {

      let total = totalTokens(quantity, 8)
      let balance = removeBalance(response.balance, quantity, 8)

      if (balance >= 0) {

        const laundryPromise = LaundryService.create({ bookingDate, user, type, quantity, total })
        const walletPromise = Wallet.findOneAndUpdate({ user }, { balance }, { new: true })

        return Promise.all([laundryPromise, walletPromise])

      } else {
        throw Error('No tienes suficientes Irontokens')
      }
    })
    .then(() => res.json({ message: 'Su reserva ha sido realizada' }))
    .catch(err => res.json({ message: 'Ha ocurrido un error', err }))
})


//delete laundry
router.delete('/deleteBooking', checkLoggedUser, (req, res) => {
  const { service_id } = req.query
  const user = req.session.currentUser._id

  const laundryPromise = LaundryService.findById(service_id)
  const walletPromise = Wallet.findOne({ user })

  Promise.all([laundryPromise, walletPromise])
    .then(response => {

      let balance = repay(response[0].quantity, response[1].balance, 8)

      const laundryDeletePromise = LaundryService.findByIdAndRemove(service_id)
      const walletUpdatePromise = Wallet.findOneAndUpdate({ user }, { balance }, { new: true })

      return Promise.all([laundryDeletePromise, walletUpdatePromise])
    })
    .then(() => res.json({ message: 'Su reserva ha sido cancelada con éxito' }))
    .catch(err => res.json({ message: 'Ha ocurrido un error', err }))
})


module.exports = router;

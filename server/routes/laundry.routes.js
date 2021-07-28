const router = require("express").Router()
const LaundryService = require('./../models/LaundryService.model')
const Wallet = require('./../models/Wallet.model')
const { checkLoggedUser } = require('./../middleware')
const { removeBalance, repay } = require('./../utils')


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

      let balance = removeBalance(response.balance, quantity, 8)

      if (balance >= 0) {

        const laundryPromise = LaundryService.create({ bookingDate, user, type, quantity })
        const walletPromise = Wallet.findOneAndUpdate({ user }, { balance }, { new: true })

        return Promise.all([laundryPromise, walletPromise])

      } else {
        throw Error("'No enough tokens in your wallet'")
      }
    })
    .then(() => res.json({ message: 'Laundry booking sucefully created' }))
    .catch(err => res.status(401).json({ message: err }))
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
    .then(() => res.json({ message: 'Laundry booking sucefully deleted' }))
    .catch(err => console.log(err))
})


module.exports = router;

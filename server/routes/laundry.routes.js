const router = require("express").Router()
const LaundryService = require('./../models/LaundryService.model')
const Wallet = require('./../models/Wallet.model')
const { checkLoggedUser } = require('./../middleware')
const { removeBalance } = require('./../utils')

router.post('/bookService', checkLoggedUser, (req, res) => {

  const user = req.session.currentUser._id
  const type = {
    dark: req.body.dark,
    delicate: req.body.delicate
  }
  const { bookingDate, quantity } = req.body
  // let total = quantity * 8
  // let accountBalance = 0

  Wallet
    .findOne({ user })
    .then(response => {
      let accountBalance = removeBalance(response.balance, quantity, 8)
      if (accountBalance >= 0) {
        const laundryPromise = LaundryService.create({ bookingDate, user, type, quantity })
        const walletPromise = Wallet.findOneAndUpdate({ user }, { balance: accountBalance }, { new: true })
        return Promise.all([laundryPromise, walletPromise])
      } else {
        res.json({ message: 'No enough tokens in your wallet' })
      }
    })
    .then(() => res.json({ message: 'Laundry booking sucefully created' }))
    .catch(err => console.log(err))
})

router.get('/deleteBooking', checkLoggedUser, (req, res) => {
  const { service_id } = req.query
  const user = req.session.currentUser._id
  let refund = 0
  let balance = 0
  const laundryPromise = LaundryService.findById(service_id)
  const walletPromise = Wallet.findOne({ user })

  Promise.all([laundryPromise, walletPromise])
    .then(response => {
      refund = response[0].quantity * 8
      balance = response[1].balance + refund
      const laundryDeletePromise = LaundryService.findByIdAndRemove(service_id)
      const walletUpdatePromise = Wallet.findOneAndUpdate({ user }, { balance }, { new: true })
      return Promise.all([laundryDeletePromise, walletUpdatePromise])
    })
    .then(() => res.json({ message: 'Laundry booking sucefully deleted' }))
    .catch(err => console.log(err))
})

module.exports = router;

const router = require("express").Router()
const LaundryService = require('./../models/LaundryService.model')
const Wallet = require('./../models/Wallet.model')



router.post('/bookService', (req, res) => {
  const user = req.session.currentUser._id
  const type = {
    dark: req.body.dark ? true : false,
    delicate: req.body.delicate ? true : false
  }
  const { bookingDate, quantity } = req.body
  let total = quantity * 8
  console.log('soy el total', total)
  let accountBalance = 0

  Wallet
    .findOne({ user })
    .then(response => {
      console.log('soy el res', response)
      accountBalance = response.balance - total
      console.log('res bal', response.balance)
      console.log(accountBalance)
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

router.get('/delete', (req, res) => {
  const { service_id } = req.query
  LaundryService
    .findById(service_id)
    .then(response => res.json(response))
    .catch(err => console.log(err))
})

module.exports = router;

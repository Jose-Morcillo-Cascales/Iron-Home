const router = require("express").Router();
const Wallet = require('./../models/Wallet.model')

router.get('/', (req, res) => {

  const user_id = req.session.currentUser._id

  Wallet
    .findOne({ user: user_id })
    .populate('menuPurchase laundryService')
    .then(response => res.json(response))
    .catch(err => console.log(err))
})
router.put('/topUp', (req, res) => {

  const user_id = req.session.currentUser._id
  const { balance } = req.body
  let addTokens = 0
  Wallet
    .findOne({ user: user_id })
    .select('balance')
    .then(response => {

      addTokens = Number(balance) + response.balance
      return Wallet.findOneAndUpdate({ user: user_id }, { balance: addTokens }, { new: true })
    })
    .then(response => res.json(response))
    .catch(err => console.log(err))
})
module.exports = router
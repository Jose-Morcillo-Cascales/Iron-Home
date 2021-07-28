const router = require("express").Router();
const Wallet = require('./../models/Wallet.model')
const LaundryService = require('./../models/LaundryService.model')
const MenuPurchase = require('./../models/MenuPurchase.model')
const { checkLoggedUser } = require('./../middleware')



//wallet details
router.get('/', checkLoggedUser, (req, res) => {

  const user_id = req.session.currentUser._id

  const walletPromise = Wallet.findOne({ user: user_id })
  const menuPromise = MenuPurchase.find({ user: user_id })
  const laundryPromise = LaundryService.find({ user: user_id })

  Promise.all([menuPromise, walletPromise, laundryPromise])
    .then(response => res.json(response))
    .catch(err => console.log(err))
})


//wallet edit
router.put('/topUp', checkLoggedUser, (req, res) => {

  const user_id = req.session.currentUser._id
  const { balance } = req.body


  Wallet
    .findOne({ user: user_id })
    .select('balance')
    .then(response => {

      let addTokens = Number(balance) + response.balance

      return Wallet.findOneAndUpdate({ user: user_id }, { balance: addTokens }, { new: true })
    })
    .then(response => res.json(response))
    .catch(err => console.log(err))
})


module.exports = router
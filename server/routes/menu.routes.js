const router = require("express").Router();
const Food = require('./../models/Food.model')
const MenuPurchase = require('./../models/MenuPurchase.model')
const Wallet = require('./../models/Wallet.model')
const { checkLoggedUser } = require('./../middleware')
const { removeBalance, repay, totalTokens } = require('./../utils')


//Food-list
router.get('/foodList', checkLoggedUser, (req, res) => {

  Food
    .find()
    .then(response => res.json(response))
    .catch(err => console.log(err))
})


//Food-details
router.get('/foodDetails/:food_id', checkLoggedUser, (req, res) => {

  const { food_id } = req.params

  Food
    .findById(food_id)
    .then(response => res.json(response))
    .catch(err => console.log(err))
})


//Create-menu
router.post('/newMenu', (req, res) => {

  const user = req.session.currentUser._id
  const { dish, date } = req.body
  //dish will be a checkbox

  Wallet
    .findOne({ user })
    .then(response => {

      //let total = totalTokens(quantity, 6)
      let balance = removeBalance(response.balance, dish.length, 6)

      if (balance >= 0) {

        const menuPromise = MenuPurchase.create({ user, date, dish })
        const walletPromise = Wallet.findOneAndUpdate({ user }, { balance }, { new: true })
        return Promise.all([menuPromise, walletPromise])

      } else {

        res.json({ message: 'No enough tokens in your menu' })
      }
    })
    .then(() => res.json({ message: 'Menu purchased sucefully' }))
    .catch(err => console.log(err))
})


//Delete menu
router.delete('/delete', checkLoggedUser, (req, res) => {

  const { menu_id } = req.query
  const user = req.session.currentUser._id

  const menuPromise = MenuPurchase.findById(menu_id)
  const walletPromise = Wallet.findOne({ user })

  Promise.all([menuPromise, walletPromise])
    .then(response => {

      let balance = repay(response[0].dish.length, response[1].balance, 6)

      const menuDeletePromise = MenuPurchase.findByIdAndRemove(menu_id)
      const walletUpdatePromise = Wallet.findOneAndUpdate({ user }, { balance }, { new: true })

      return Promise.all([menuDeletePromise, walletUpdatePromise])
    })
    .then(() => res.json({ message: 'Menu sucefully deleted' }))
    .catch(err => console.log(err))
})


//Details-menu
router.get("/details/:menu_id", checkLoggedUser, (req, res) => {

  const user = req.session.currentUser._id
  const { menu_id } = req.params

  MenuPurchase
    .findById(user, { menu_id })
    .populate('dish')
    .then(response => res.json(response))
    .catch(err => console.log(err))
})


module.exports = router;

const router = require("express").Router();
const Food = require('./../models/Food.model')
const MenuPurchase = require('./../models/MenuPurchase.model')
const { checkLoggedUser } = require('./../middleware')


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
router.post('/newMenu/', (req, res) => {

  const user = req.session.currentUser._id
  const { dish, quantity, date } = req.body               //dish will be a checkbox
  console.log(dish)
  MenuPurchase
    .create({ user, date, dish, quantity })
    .then(response => {
      console.log(response.dish)
      res.json(response)
    })
    .catch(err => console.log(err))
})
/* const user = req.session.currentUser._id
const { dish, quantity, date } = req.body
//dish will be a checkbox
let total = dish.length * 6
let accountBalance = 0
Wallet
  .findOne({ user })
  .then(response => {
    accountBalance = response.balance - total
    if (accountBalance >= 0) {
      const menuPromise = MenuPurchase.create({ user, date, dish, quantity })
      const walletPromise = Wallet.findOneAndUpdate({ user }, { balance: accountBalance }, { new: true })
      return Promise.all([menuPromise, walletPromise])
    } else {
      res.json({ message: 'No enough tokens in your menu' })
    }
  })
  .then(() => res.json({ message: 'Menu purchased sucefully' }))
  .catch(err => console.log(err)) */
//Delete menu
router.get('/delete', checkLoggedUser, (req, res) => {

  const { menu_id } = req.query

  MenuPurchase
    .findByIdAndRemove(menu_id)
    .then(response => res.json(response))
    .catch(err => console.log(err))

})

//Details-menu
router.get("/details/:menu_id", (req, res) => {

  const { menu_id } = req.params

  MenuPurchase
    .findById(menu_id)
    .populate('dish')
    .then(response => res.json(response))
    .catch(err => console.log(err))
})



module.exports = router;

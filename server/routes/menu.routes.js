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
router.post('/newMenu/:date', checkLoggedUser, (req, res) => {

  const user = req.session.currentUser._id
  const { date } = req.params
  const { dish, quantity } = req.body               //dish will be a checkbox

  MenuPurchase
    .create({ user, date, dish, quantity })
    .then(response => res.json(response))
    .catch(err => console.log(err))
})

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

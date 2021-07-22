const router = require("express").Router();
const Food = require('./../models/Food.model')
const MenuPurchase = require('./../models/MenuPurchase.model')

//Food-list
router.get('/foodlist', (req, res) => {

  Food
    .find()
    .then(response => res.json(response))
    .catch(err => console.log(err))
})
//Food-details
router.get('/food-details/:food_id', (req, res) => {

  const { food_id } = req.params

  Food

    .findById(food_id)
    .then(response => res.json(response))
    .catch(err => console.log(err))
})
//Create-menu
router.post('/new-menu', (req, res) => {
  // /:menu_date
  const user_id = req.session.currentUser._id
  // const { menu_date } = req.params
  // const { quantity, dish_id, date } = req.body
  const { dish_id } = req.query

  MenuPurchase
    .create(user_id, { quantity: 1, dish: dish_id, date: new Date('07/24/2021') })
    .then(response => res.json(response))
    .catch(err => console.log(err))
})







































/* router.post('/create', (req, res) => {

  const { description, ingredients, name, vegetarian, image, type } = req.body


  Food
    .create({ description, ingredients, name, vegetarian, image, type })
    .then(() => res.json({ code: 200, message: 'User created' }))
    .catch(err => res.status(500).json({ code: 500, message: 'DB error while creating user', err }))
})
 */


module.exports = router;

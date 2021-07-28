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
    .catch(res.status(401).json({ message: 'Ha ocurrido un error al listar los platos de comida', err }))
})


//Food-details
router.get('/foodDetails/:food_id', checkLoggedUser, (req, res) => {

  const { food_id } = req.params

  Food
    .findById(food_id)
    .then(response => res.json(response))
    .catch(res.json({ message: 'Ha ocurrido un error al cargar los detalles de el plato', err }))
})


//Create-menu
router.post('/newMenu', (req, res) => {

  const user = req.session.currentUser._id
  const { dish, date } = req.body


  Wallet
    .findOne({ user })
    .then(response => {

      let total = totalTokens(dish.length, 6)
      let balance = removeBalance(response.balance, dish.length, 6)

      if (balance >= 0) {

        const menuPromise = MenuPurchase.create({ user, date, dish, total })
        const walletPromise = Wallet.findOneAndUpdate({ user }, { balance }, { new: true })
        return Promise.all([menuPromise, walletPromise])

      } else {

        res.json({ message: 'No tiene suficientes tokens' })
      }
    })
    .then(() => res.json({ message: 'Su menu ya esta reservado' }))
    .catch(res.json({ message: 'Ha ocurrido un error', err }))
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
    .then(() => res.json({ message: 'Su menu ha sido cancelado correctamente' }))
    .catch(res.json({ message: 'Ha ocurrido un error', err }))
})


//Details-menu
router.get("/details/:menu_id", checkLoggedUser, (req, res) => {

  const user = req.session.currentUser._id
  const { menu_id } = req.params

  MenuPurchase
    .findById(user, { menu_id })
    .populate('dish')
    .then(response => res.json(response))
    .catch(res.status(401).json({ message: 'Ha ocurrido un error', err }))
})


module.exports = router;

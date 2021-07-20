const router = require("express").Router();
const Food = require('./../models/Food.model')

router.post('/create', (req, res) => {

  const { description, ingredients, name, vegetarian, image, type } = req.body


  Food
    .create({ description, ingredients, name, vegetarian, image, type })
    .then(() => res.json({ code: 200, message: 'User created' }))
    .catch(err => res.status(500).json({ code: 500, message: 'DB error while creating user', err }))
})



module.exports = router;

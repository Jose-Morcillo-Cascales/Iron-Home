const router = require("express").Router();


router.get("/", (req, res, next) => {
  res.json({ message: 'holi' })
})

module.exports = router;

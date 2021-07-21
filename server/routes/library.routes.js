const router = require("express").Router();
const Library = require('./../models/Library.model')
const LibraryBooking = require('./../models/LibraryService.model')

//CHOOSE DATE
router.get('/:date_requested', (req, res) => {

  const { date_requested } = req.params
  let nextDay = new Date(date_requested)
  nextDay.setDate(nextDay.getDate() + 1)
  console.log(date_requested)
  console.log(nextDay)

  Library
    .find()
    .then(response => {
      const bookigsPerLibrary = response.map(elm => LibraryBooking.find({
        library: elm._id, initDate: {
          "$gte": new Date(date_requested),
          "$lt": nextDay
        }
      }))
      return Promise.all(bookigsPerLibrary)
    })
    .then(bookings => res.json(bookings))
    .catch(err => console.log(err))
})

router.get('/checkAvaialbilityByDate/:date_requested', (req, res) => {



  LibraryBooking
    .find({ date_requested })
    .populate('library')
    .then(response => {

      res.json(response)
    })
    .catch(err => res.status(500).json({ code: 500, message: 'Error fetching library', err }))
})
































/* router.post('/booking', (req, res) => {
  // const{user,library,initDate}=req.body

  LibraryBooking.create({ user: "60f69a6ed8177125d855d19a", library: "60f6b9909b917842ec1f6bb4", initDate: new Date('07/24/2021') })
    .then(algo => console.log(algo))
    .catch(err => console.log(err))
})
 */


module.exports = router;
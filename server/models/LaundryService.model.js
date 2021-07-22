const mongoose = require('mongoose')
const Schema = mongoose.Schema


const laundryServiceSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  bookingDate: {
    type: Date,
    required: true,
    default: Date.now()
  },
  type: {
    dark: {
      type: Boolean,
      required: true,
      default: false
    },
    delicate: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  quantity: {
    type: Number
  }
},
  { timestamps: true }
)


const LaundryService = mongoose.model('LaundryService', laundryServiceSchema);

module.exports = LaundryService;

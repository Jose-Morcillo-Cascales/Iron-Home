const { Schema, model } = require("mongoose");


const laundryServiceSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
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


const LaundryService = model('LaundryService', laundryServiceSchema);

module.exports = LaundryService;

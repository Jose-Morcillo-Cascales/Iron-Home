const mongoose = require('mongoose')
const Schema = mongoose.Schema


const foodSchema = new Schema({
  name: {
    type: String,
    minLegth: 1,
    maxLength: 50,
    required: true,
    set: value => value.charAt(0).toUpperCase() + value.substring(1)
  },
  description: {
    type: String,
    minLegth: 1,
    required: true,
    set: value => value.charAt(0).toUpperCase() + value.substring(1)
  },
  ingredients: {
    type: String,
    required: true,
  },
  vegetarian: {
    type: Boolean,
    required: true,
    default: false,
  },
  image: {
    type: [String],
    required: true,
    default: ['https://image.flaticon.com/icons/png/512/1200/1200919.png']
  },
  type: {
    type: String,
    enum: ['first', 'second', 'dessert'],
    default: 'first'
  }
},
  { timestamps: true }
)


const Food = mongoose.model('Food', foodSchema);

module.exports = Food;

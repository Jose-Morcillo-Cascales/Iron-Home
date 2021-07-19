const { Schema, model } = require("mongoose");


const userSchema = new Schema({
  mail: {
    type: String,
    required: true,
    validate: {
      validator: function (email) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
      },
      message: 'Please, enter a valid email'
    }
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    minLegth: 1,
    maxLength: 50,
    required: true,
    set: value => value.charAt(0).toUpperCase() + value.substring(1)
  },
  lastName: {
    type: String,
    minLegth: 1,
    maxLength: 50,
    required: true,
    set: value => value.charAt(0).toUpperCase() + value.substring(1)
  },
  DNI: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true,
    default: 'https://image.flaticon.com/icons/png/512/1200/1200919.png'
  },
  role: {
    type: String,
    enum: ['student', 'admin'],
    default: 'student'
  },
},
  { timestamps: true }
)


const User = model('User', userSchema);

module.exports = User;

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const libraryServiceSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  library: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Library'
  },
  initDate: {
    type: Date,
    required: true,
    default: Date.now()
  }
},
  { timestamps: true }
)


const LibraryService = mongoose.model('LibraryService', libraryServiceSchema);


module.exports = LibraryService;

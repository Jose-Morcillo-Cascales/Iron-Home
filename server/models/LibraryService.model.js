const { Schema, model } = require("mongoose");


const libraryServiceSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  library: {
    type: Schema.Types.ObjectId,
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


const LibraryService = model('LibraryService', libraryServiceSchema);


module.exports = LibraryService;

const { Schema, model } = require("mongoose");


const libraryServiceSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  library: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Library'
  },
  date: {
    type: Date,
    required: true,
    default: Date.now()
  },
  term: {
    type: Number,
    enum: [30, 60, 90, 120],
    default: 30,
  }
},
  { timestamps: true }
)


const LibraryService = model('LibraryService', libraryServiceSchema);

module.exports = LibraryService;

const mongoose = require('mongoose');

var Schema = mongoose.Schema

var artistSchema = new Schema({
  name: String,
  imageUrl: String,
  spotifyId: String,
  genres: [String]
})

var Artist = mongoose.model('Artist', artistSchema)

module.exports = Artist

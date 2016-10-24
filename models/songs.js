const mongoose = require('mongoose');

var Schema = mongoose.Schema

var songSchema = new Schema({
  name: String,
  artist: String,
  album: String,
  imageUrl: String
})

var Song = mongoose.model('Song', songSchema)

module.exports = Song

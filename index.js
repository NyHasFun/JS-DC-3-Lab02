const express = require('express');
const hbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
mongoose.connect('mongodb://localhost:27017/tunr')
const Artist = require('./models/artists');
const Song = require('./models/songs');

var app = express()

app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(bodyparser.urlencoded({extended: true}))

app.get('/', function(req, res) {
  Artist.find({},function(err,data) {
    res.render('index',{artists: data})
  })
})

app.get('/artists/new', function(req, res) {
  res.render('artists/new')
})

app.get('/artists/:id', function(req, res) {
  Artist.findById(req.params.id,function(err,data) {
    res.render('artists/view',{artists: data})
  })
})

app.post('/artists', function(req, res){
  var newArtist = new Artist({
    name: req.body.artist,
    imageUrl: req.body.imageUrl,
    spotifyId: req.body.spotifyId,
    genres: req.body.genres
  })
  newArtist.save()
  console.log(newArtist);
  res.redirect('/')
})

app.get('/songs/list', function(req, res) {
  Song.find({},function(err,data) {
    res.render('songs/index',{songs: data})
  })
})

app.get('/songs/new', function(req, res) {
  res.render('songs/new')
})

app.get('/songs/:id', function(req, res) {
  Song.findById(req.params.id,function(err,data) {
    res.render('songs/view',{songs: data})
  })
})

app.post('/songs', function(req, res){
  var newSong = new Song({
    name: req.body.name,
    artist: req.body.artist,
    album: req.body.album,
    imageUrl: req.body.imageUrl
  })
  newSong.save()
  console.log(newSong);
  res.redirect('/songs/list')
})

app.listen(3000, function() {
  console.log('running on port 3000');
})

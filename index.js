const express = require('express');
const hbs = require('express-handlebars');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tunr')

var app = express()

app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', function(req, res) {
  res.render('index')
})

app.listen(3000, function() {
  console.log('running on port 3000');
})

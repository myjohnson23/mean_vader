var express = require('express');
var app = express();

var fs = require('fs');

// include mongodb via /models/db.js
require('./models/db');

// var testData = fs.readFileSync('data.json');  Only for initial testing

app.get('/api', function(req, res) {
  //future get all
});

app.get('/api/:id', function(req, res) {
  //future get by id
});

app.post('/api', function(req, res) {
  // future post
});

app.put('/api/:id', function(req, res) {
  // future put
});

app.patch('/api/:id', function(req, res) {
  // future patch
});

app.delete('/api/:id', function(req, res) {
  // future delete
});

app.listen(5000);

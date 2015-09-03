// intro to express!
// require in the express library

var express = require('express');
// napmespace a new instance of the express framework to 'app'
var app = express(); //namespace

// some data to send...
var data = {
  "dinosaurs": "are lonely",
  "why": "all their friends are dead :("
};

var david = {
  "name": "David",
  "birthplace": "Colby, Kansas",
  "favorite vacation": "Grand Canyon"
}

app.get('/', function(req, res) {
  res.send(david);

});

// call app.get (or app.post), req = request from user,
// res = response to send
app.get('/api', function(req,res) {
  // response.send(sone stuf)
  res.send(data);
});

// have the server listen on port 5000
app.listen(5000);

// intro to express
// require the express library

var express = require('express');
// namespace a new instance of the express framework to 'app'
var app = express();

var data = {
  "dinosaurs": "are lonely",
  "why": "all their friends are dead."
};

var about = {
  "Name":"Chris",
  "Occupation":"Student at WDI",
  "Hobbies":"Cycling"
};

app.get('/', function(req, res) {
  res.send(about);
});

app.get('/api', function(req, res) {
  res.send(data);
});

app.listen(5000);
console.log("Express is running on port 5000");

var express = require('express');
var app = express();

var data = {
  "dinosaurs":"are lonely",
  "why":"all theis friends are dead :("
};

app.get('/api', function(req,res) {
  res.send(data);
});

app.get('/', function(req,res){
  res.send({
    "name": "Eric",
    "Age":"25",
    "Nationality": "Polish",
    "Date-of-birth": "Dec 31, 1989"
  });
});

app.listen(5000);

var express = require('express');
var app = express();

var data = {
  "dino": "are lonely",
  "why": "all their friends are dead :("
};

var myron = {
    "myron": "is the man",
    "johnson": "is the legacy"
}

app.get('/', function(req, res){
  res.send(myron);
});

app.get('/api', function(req, res){
  res.send(data);
});

app.listen(5000);

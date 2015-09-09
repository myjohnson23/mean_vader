var express = require('express');
var app = express();
var http = require('http');
var fs = require('fs');

var json = fs.readFileSync('./message.json');

app.get('/', function(req, res){
  res.write(json);
  res.end();
});

app.listen(5000);
console.log('Your Express app is running...')

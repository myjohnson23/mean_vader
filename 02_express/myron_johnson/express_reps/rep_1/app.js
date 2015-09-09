var express = require('express');
var app = express();

var fs = require('fs');

var data = fs.readFileSync('./data.json');

app.get ('/', function(req, res) {
  console.log(req);
  res.write(data);
  res.end();
});

app.listen(5000);

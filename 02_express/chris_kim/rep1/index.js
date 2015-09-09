var express = require('express');
var fs = require('fs')
var app = new express();

var json = fs.readFileSync('./data.json');


app.get('/', function(req, res) {
  res.write(json);
  res.end();
});

app.listen(5000);
console.log("Express is running on port 5000");

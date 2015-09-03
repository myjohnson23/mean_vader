var express = require('express');
var fs = require('fs');
var app = express();

var data = fs.readFileSync('./data.json')

app.get('/', function(req, res){

  res.write(data);
  res.end();
})

app.listen(5000);

console.log("express is running son!");

var express = require('express');
var fs = require('fs');
var app = express();

var json = fs.readFileSync('./data.json')

app.get('/', function(req,res){
  res.writeHead(200);
  res.write(json);
  res.end();
});

app.listen(5000);

var express = require('express');
var fs = require('fs'); 

var json = fs.readFileSync('./data.json');

var app = express();

app.get('/', function(req, res){
	res.write(json);
});

app.listen(5000);

console.log('power level 5000'); 
var express = require('express');
var app = express();


var bodyParser = require('bodyParser');

app.use(bodyParser.json());//support parsing json
app.use(bodyParser.urlencoded({extend: true}));

app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();

});

//POST
app.post('/submit', function(req, res){
  console.log('unimplimented.....:(')
});

app.get('/', function(req, res){
  console.log('unimplimented.....:(')
});

app.path('/update', function(req, res){
  console.log('unimplimented.....:(')
});

app.delete('/delete', function (req, res){
  console.log('unimplimented.....:(')
});
app.listen(5000);
console.log('unimplimented.....:(')

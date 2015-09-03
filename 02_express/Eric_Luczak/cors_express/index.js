var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested_with, Content-Type, Accept");
  next();
});

app.post('/submit', function (req, res) {

  console.log('req.body');
  console.log(req.body);

  console.log('req.params');
  console.log(req.params);

  console.log('req.query');
  console.log((req.query));

  res.send(req.body);
});

app.post('/eric', function (req, res) {
  req.body.name = 'Eric';
  res.send(req.body.name + ' is a cool person');
});

app.listen(5000);
console.log('Express is listening');

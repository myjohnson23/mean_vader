var express = require('express');
var app = express();
//include the body-parser library to read from post/put/patch/delete
var bodyParser = require('body-parser');
app.use(bodyParser.json());  // supports parsing json
app.use(bodyParser.urlencoded({ extend: true }));

//enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// end enabling of CORS

//POST request
app.post('/submit', function(req, res){
  // hey bodyParser... can you show..
  console.log('req.body');
  console.log(req.body);

  console.log('req.params');
  console.log(req.params);

  console.log('req.query');
  console.log(req.query);

  res.send(req.body);
});

app.post('/tristan', function(req, res) {
  req.body.name == 'Tristan'
  res.send(req.body.name + 'is a human');
});

//listen for requests
app.listen(5000);
console.log('Express is listening')

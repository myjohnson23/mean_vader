var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
// enable cors

app.use(function(req, res, next){

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();

});
//end enabling cors



// post request

app.post('/submit', function(req, res){

  // hey bodyParser........ can you have a show....
  console.log('req.body');
  console.log(req.body);

  console.log('req.params');
  console.log(req.params);

  // hey body parser can u query string values
  console.log('req.query');
  console.log(req.query);

  res.send(req.body);

});

app.post('/james', function(req, res){
  //req.body.name == 'your name'
  req.body.name == "Jimbo";
  res.send(req.body.name + " is a cool mamajama")


})

// listen for request

app.listen(5000);

console.log('express is listening')

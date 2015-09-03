var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

// enable cors

app.use(function(req, res, next){

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();

});

app.get ('/get', function(req, res){

  res.write("Issac is a little Guy");

  res.end();

});

app.post ('/post', function(req, res){

  req.send("Sending to outer space");

  // data not yet implemented
  res.end();
});

app.delete('/delete', function(req, res){

  console.log('delete is working')

})

app.put('/put', function(req, res){

  console.log("this is where i update")

})

app.listen(5000);
console.log('express is running');

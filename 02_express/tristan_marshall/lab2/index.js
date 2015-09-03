var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({


}))

// enable cors
app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();


});


app.get('/get', function(req, res){
  res.write("Get it Get it Go!");
  res.end();
});

app.post('/post', function(req, res) {
  req.send("Sending a string");
  req.end();
});

app.delete('/delete', function(req, res) {
  console.log('delete is working')
});

app.put('/put', function(req, res){
  console.log('this is where I update things!')
});

app.listen(5000);

console.log('the server is running!');

var express = require('express');
//namespace a new instance of the exppres framework to 'app'
var app = express();
//some data to send
var data = {
  "dinosaurs": "are lonely",
  "why": "all their friends are dead :("
};
var isaac = {
  "WHO?": "Isaac Bueno",
  "WHAT?": "Web Developer",
  "WHEN?": "I'm a noobie, so consider me a jr level dev",
  "WHERE?": "GA",
  "WHY?": "BECAUSE........."
}



app.get ('/api/isaacdata', function(req,res){
  res.send(isaac);
});

// or
app.get('/', function(req, res){
  res.send({
    "name": "isaac",
    "age": 25
  });
});
//call app.get (or app.post), req = request from user
//res = respond to send
app.get('/api', function(req, res) {
  //response.send(some stuff)
  res.send(data);
});
//have the server listen on port 5000
app.listen(5000);
console.log('express is running on port 5000')

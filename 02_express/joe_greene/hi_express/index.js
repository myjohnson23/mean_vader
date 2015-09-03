//intro to express
//just loading the lib
var express = require('express');
var app = express();

//some data to send...
var data = {
  "dinasaurs": "are lonely",
  "why": "all their friends are dead :("
};

var me = {
  "Tall Guy": "stares at the sky",
  "why because": "He's to fly"
};

app.get('/', function(req, res) {
  res.send(me);

});


//call app.get(or app.post), req = request from user,
// res
app.get('/api', function(req, res) {
  res.send(data);

});

//have the server listen on 5000
app.listen(5000);
console.log("Express is running! port 5000");

// intro to express
// require the express library
var express = require('express');
var app = express(); // server side namespace

//some data to send
var data = {
  "name" : "Tristan Marshall",
  "location" : "Chicago, IL"
};

var moreData = {
  "name" : "Marshall Tristan",
  "location" : "IL, Chicago"
}
//create an API get route

app.get('/', function(req, res) {
  res.send(moreData);
});

//call app.get (or app.post), request from user, response to send
app.get('/api', function(req, res) {
  // response.send(some stuff)
  res.send(data);
});

// have the server listen on port 5000
app.listen(5000);
console.log('Express is running on port 5000')

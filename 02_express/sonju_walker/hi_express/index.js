// intro to express
// require the express library
  var express = require('express');
  //namespace new instance of the express framework to 'app'
  var app = express();

  // some data to send...
  var data = {
    "dinosaurs": "are lonely",
    "why": "all their friends are dead :("
  };

  var mySong = {
    "artist": "Sade",
    "song": "Kiss of life"
  };

  app. get('/', function(req, res) {
    res.send(mySong);
  });


  // call app.get (or app.post), req = request from user,
  // res = response to send
  app. get('/api', function(req, res) {
    // response.send(some stuff)
    res.send(data);
  });

  // have the server listen to port 5000
  app.listen(5000);
    console.log("Express is running! port 5000")

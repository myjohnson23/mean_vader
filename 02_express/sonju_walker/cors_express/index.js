
//1st step
  var express = require('express');
  var app = express();

//3rd step
  // include the body-parser library to read from post/put/patch/delete
  var bodyParser = require('body-parser');
  app.use(bodyParser.json()); // support parsing json
  app.use(bodyParser.urlencoded({ extended: true }));

//5th step
    // enable CORS
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  // end enabling of CORS


  // POST request
  app.post('/submit', function(req, res) {

//4th step
    // hey bodyParser... can you haz show....
    console.log('req.body');
    console.log(req.body);
    res.send(req.body);

    // hey body parser... can you show params?
    console.log('req.params');
    console.log(req.params);

    // hey body parser.. can you query string values?
    console.log('req.query');
    console.log(req.query);
  });

//6th step
  app.post('/sonju', function(req, res) {
    req.body = "sonju"
    res.send(req.body.sonju + ' is a cool chica.');
  });

//2nd step
  // listen for requests
  app.listen(5000);
    console.log('Express is lisenting : port 5000');

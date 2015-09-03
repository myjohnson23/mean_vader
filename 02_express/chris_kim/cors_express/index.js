var express = require('express');
var app = new express();
// Include the body-parser library to read from post/put/patch/delete
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support parsing json
app.use(bodyParser.urlencoded({ extended: true }));


// enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// end enabling of CORS


// POST request
app.post('/submit', function(req, res) {
  //  bodyParser...read request body data on ajax call--> { name: 'James', friend: 'Vader' }
  console.log('req.body');
  console.log(req.body);

  // bodyParser...show params --> {}
  console.log('req.params');
  console.log(req.params);

  // bodyParser...how to show query string values (params pass in URL on line 11) --> {booze =:'true'}
  console.log('req.query');
  console.log(req.query);

  res.send(req.body);
});

// Post via AJAX call
app.post('/chris', function(req, res) {
// req.body.name = 'your name'
res.send(req.body.name + ' is da man')
});

// Listen for requests
app.listen(5000);
console.log("Express is listening on port 5000");

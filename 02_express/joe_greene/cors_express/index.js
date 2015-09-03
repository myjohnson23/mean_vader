var express = require('express');
var app = express();
// include the body-parser library to read from post/put/patch/delete
var bodyParser = require('body-parser');
app.use(bodyParser.json()); //supports parsing json
app.use(bodyParser.urlencoded({ extended: true}));

// enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// end enabling of CORS
//splat to to catch on 1st line 2nd want origin to be accepted


//POST REQUEST enable first
app.post('/submit', function(req, res) {


    // hey bodyParser... can you haz show
    console.log('req.body');
    console.log(req.body);


    // hey body parser.. can you show params?
    console.log('req.params');
    console.log(req.params);


    // hey body parser... can you query string values?
    console.log('req.query');
    console.log(req.query);

res.send(req.body);
});

//new post
app.post('/joegreene', function(req, res) {
  // req.body.name == 'your name'
  res.send(req.body.name + ' is a cool person');
});



//listen for requests
app.listen(5000);
console.log("Express is listening :5000");

var express = require('express');
var app = express();
// include body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support parsing json
app.use(bodyParser.urlencoded({extended: true}));

// enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// end enabling of CORS


// POST request
app.post('/submit', function(req, res){
  // ask bodyParser to show
  console.log('req.body');
  console.log(req.body);

  console.log('req.params');
  console.log(req.params);

  console.log('req.query');
  console.log(req.query);


  res.send(req.body);


});

app.post('/myron', function(req, res){
  //req.body == 'your name'
  res.send(req.body.name + ' is a cool person');

});


app.listen(5000);
console.log('express is listening on port 5000');

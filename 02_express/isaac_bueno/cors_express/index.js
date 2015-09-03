var express = require('express');
var app = express();
// include the body parser livrary to read from post/put/patch/delete
var bodyParser = require('body-parser');

app.use(bodyParser.json()); //support parsing json
app.use(bodyParser.urlencoded({extend: true}));

//enable CORS
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  //by putting that splat in there its saying that ANY server can contact this.
  //allow any origin server
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  //were specifying that we want the origin to be cross requested from another server as long as we have a content type accepted
})
//End enabling with CORS
//POST request
app.post('/submit', function(req, res){

  //hey bodyParser..... can you haz show..... where you send back a message body
  console.log('req.body');
  console.log(req.body);
  //hey bodyParser....... can you show params? Actual parameters set in the params object $.params
  console.log('req.params');
  console.log(req.params);
  //hey bodyParser.......can you query string values? query strings.....stuff that is on the url....query strings

  console.log('req.query');
  console.log(req.query);

  res.send(req.body);

});

//POST
app.post('/isaac', function(req, res){
  req.body.name == 'Isaac'
  //req.body.name == 'your name'
  res.send(req.body.name + "is a dude brahhhhh!");
});


app.listen(5000);
console.log('express is listening :5000');

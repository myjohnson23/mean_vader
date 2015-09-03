
  // require express and use it
  var express = require('express');
  var app = express();

  // create some JSON to send to a user
  var data = {
    "message": "Your late for dinner.",
    "from": "Mom",
    "to": "son"
  };

  // setup a 'get' route... JS version of sinatra!
  app.get('/api', function(req, res) {
    res.send(data);
  });

  // setup a 'post' route.. JS version of sinatra!
  app.post('/api', function(req, res) {
    res.send({
      "message": "thanks.. you've sent me some useful data"
    });
    console.log(req);
  });

  app.listen(3000);
  console.log('Express app is runnining...');

  // Request object(body, params, and query)
    // include the body-parser module so we can see inside of req.body
    var bodyParser = require('body-parser');
    app.use(bodyParser.json());  // support json encoded bodies
    app.use(bodyParser.urlencoded({ extended: true})); // support encoded bodies


  // create an API 'post' route.. let's look at the different sets of data we can get back
   app.post('/api', function(req, res) {
     res.send({
       "message": "thanks, " + req.body.name + "...you've send me some useful data"
     });

     // we'll log out the params, body, and query objects here for you to see what is inside
     console.log("req.params");
     console.log("req.params");
     console.log("req.body");
     console.log("req.body");
     console.log("req.query");
     console.log("req.query");

   });


   // create another 'post' route that accepts 'params'
   // this would look like... http://localhost:3000/items/42
   app.post('/api/items/:id', function(req, res) {
     console.log(req.params);
      res.send("Your item #" + req.params.id + " is not in stock ...womp womp.");
   });


// Ajax call
//  test out our routes using an Ajax call
      // sending over data to the request.body
        $.post("/api", { name: "Sonju"}, function(data) {
          console.log(data);
        });

        // sending over data using request.params
        $.post("/api/items/42", { item: "Hitchiker's Guide to the Galaxy"}, function(data){
          console.log(data);
        });

// NOT rendering **Stopped**

var express = require('express');
var app = express();

var body_parser = require('body-parser');
app.use(body_parser.json()); //parsing json abilities
app.use(body_parser.urlencoded({ extended: true }));

// enable cors
app.use(function(request, response, next) {
        response.header("Access-Control-Allow-Origin", "*");
        response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
}); // end cors support

// enable a get request
app.get('/api', function(request, response) {
        console.log('API is coming soon please check back later...');
        response.send('API is not yet implemented, check back later...');
});

//enable a post request
app.post('/api', function(request, response) {
        // coming soon
        console.log('API is coming soon please check back later...');
        console.log('-------------------------');
        console.log('Your data reqeust was');
        console.log(request.body);
        console.log('-------------------------');
        response.send('API is not yet implemented, check back later...');
});

app.listen(5000);
console.log('Server is listening on port 5000...');

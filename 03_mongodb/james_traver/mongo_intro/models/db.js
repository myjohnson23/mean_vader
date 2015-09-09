// we're going to use an ORM Called Mongoose
var mongoose = require('mongoose');

// define my connection string!
// protocol://username:password@website.com:3000/resource-name
// ftp://admin:awesomepassword@ftp.somewebsite.com/path/to/www
// website: https://google.com/search

// mongodb://server-name.com:port/name-of-database
var connectionString = 'mongodb://localhost/myfirstdatabase';

// now tell mongoose to connect to our database using connectionString
mongoose.connect(connectionString);

// listen for events in mongoose
// 'connected' event - database has connected
// 'error' event - something has gone wrong!
// 'disconnected' - ' database has been disconnected
mongoose.connection.on('connected', function() {
  console.log('Mongoose has connected to: ' + connectionString);
});
mongoose.connection.on('error', function(error) {
  console.log('Mongoose has had an error: ' + error);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose has been disconnected!');
});

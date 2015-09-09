// mongodb://username:password@localhost:27027/database-name
var connectionString = 'mongodb://localhost/test';

// connect to database
mongoose.connect(connectionString);

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + connectionString);
});
mongoose.connection.on('error', function() {
  console.log('Mongoose connection error: ' + error);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected!');
});

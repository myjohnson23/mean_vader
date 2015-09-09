var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  port: '3307',
  user: 'baseball',
  password: 'baseball123',
  database: 'lahman_baseball_stats'
});

connection.connect();

connection.query('SELECT * from master', function(err, rows, fields) {
  if (!err)
    console.log('The result is: ', rows);
  else
    console.log(err);
});

connection.end();

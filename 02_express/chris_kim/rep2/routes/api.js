var express = require('express');
var router = express.Router();

// Initial dummy route for testing
router.get('/', function(req, res) {
  res.json({ message: 'Test' });
});

// Register all our routes with /api
router.use('/api', router);

router.get('/', function (req, res) {
  res.send('Hello World!');
  res.end();
});

router.get('/:id', function (req, res) {
  res.send('Got a GET request for /:id');
  res.end();
});

router.post('/', function (req, res) {
  res.send('Got a POST request');
  res.end();
});

router.put('/:id', function (req, res) {
  res.send('Got a PUT request at /:id');
  res.end();
});

router.delete('/:id', function (req, res) {
  res.send('Got a DELETE request at /:id');
  res.end();
});

// Listen for requests
app.listen(5000);
console.log("Express is listening on port 5000");

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(request, response, next) {
  response.render('index', { title: 'My First Express App' });
});

router.get('/api', function(request, response) {
	response.send({ "message": "It's a beautiful day!", "note": "Chicago summers rock!" });
});

module.exports = router;

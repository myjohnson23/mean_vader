var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
  	message: 'It is a beautiful day!',
  	note: 'Chicago summers rock!'
  });
});

module.exports = router;

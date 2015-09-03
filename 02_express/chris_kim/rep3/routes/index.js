var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api', function(req, res) {
  res.send({ message: 'it is a beautiful day', note: 'Chicago summers rock' });
});

module.exports = router;

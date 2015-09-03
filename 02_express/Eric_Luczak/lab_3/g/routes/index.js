var express = require('express');
var router = express.Router();
var json = {
  "message":"it is a beautiful day",
   "note":"Chicago summers rock."
};


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', json);
});



router.get('/api', function(req, res, next) {
  res.send(json);
})

module.exports = router;

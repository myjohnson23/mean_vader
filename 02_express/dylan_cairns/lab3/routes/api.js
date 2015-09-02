var express = require('express');
var router = express.Router(); 

router.get('/', function(req, res, next) {
	res.render('api', {title: 'Get', body: 'yay'});
	res.send('get request'); 
});

router.post('/', function(req,res,next) {
	var info = JSON.stringify(req.body);
	//res.render('api', {title: 'Post', body: info});
	res.send('post : ' + info);
})

router.put('/', function(req,res,next) {
	var info = JSON.stringify(req.body);
	//res.render('api', {title: 'Put', body: info}); 
	res.send('put : '+ info); 
})

router.delete('/', function(req,res,next) {
	var info = JSON.stringify(req.body);
	//res.render('api', {title: 'Delete', body: info}); 
	res.send('delete: ' + info); 
}); 

module.exports = router; 
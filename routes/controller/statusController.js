var express = require('express');
var router = express.Router();

var Proxy = require('../service/proxy');

router.get('/api/status/', function(req, res){
	var proxy = new Proxy(req, res);
	proxy.forwardGetRequest();
});

module.exports = router;

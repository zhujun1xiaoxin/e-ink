/**
 * Created by Administrator on 2017/8/14.
 */
var express = require('express');
var router = express.Router();
var Proxy = require('../service/proxy');

router.get('/api/config/', function(req, res){
	var proxy = new Proxy(req, res);
	proxy.forwardGetRequest();
});

router.put('/api/config/', function(req, res){
	var proxy = new Proxy(req, res);
	proxy.forwardPutRequest();
});

router.get('/api/srv/restart/', function(req, res){
	var proxy = new Proxy(req, res);
	proxy.forwardGetRequest();
});

router.get('/api/logs/', function(req, res){
	var proxy = new Proxy(req, res);
	proxy.forwardGetRequest();
});

module.exports = router;
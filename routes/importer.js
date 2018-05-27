var express=require('express');
var router=express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var importer = require('../models/Importer.js');
var impLogin=require('../models/Login.js');
//router.use(bodyParser.json());
//router.use(bodyParser.urlencoded({ extended: true }));


router.get('/', function(req, res, next) {
      res.sendfile('buyer_reg.html');
       console.log(__dirname);
 		//res.send("yes")
 });

router.post('/insert', function(req, res, next) {
  
  var item = {
  	utype: req.body.category,
    firstName: req.body.fname,
    secondName: req.body.lname,
	emailId	:req.body.eID,
	pword: req.body.pwd,
	repeatpword:req.body.rptpwd,
	country: req.body.Country,
	Address: req.body.address
	};

importer.create(item).then(item => {
 res.send("item saved to database");
 }).catch(err => {
 	console.log(err);
 res.status(400).send("unable to save data");
 });
});


module.exports=router;

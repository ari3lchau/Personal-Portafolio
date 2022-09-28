var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about',function(req,res,next){
  res.render('about',{ title: 'Express in about page' });
})

router.get('/aboutme',function(req,res,next){
  res.render('aboutme',{ title: 'Express in about Me page' });
})

router.get('/contact',function(req,res,next){
  res.render('contact',{ title: 'Express in Contact page' });
})

router.get('/projectpage',function(req,res,next){
  res.render('projectpage',{ title: 'Express in Project page' });
})

router.get('/service',function(req,res,next){
  res.render('service',{ title: 'Express in service page' });
})

module.exports = router;

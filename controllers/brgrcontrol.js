// This will store the get, put and post routes for the app

// This section list the items that are required 
var express = require('express');
var router = express.Router();
var burger = require('../models/brgr.js')

//Get route
router.get('/', function(req, res){
  burger.all(function(burger_data){
    // console.log(burger_data);
    res.render('index', {burger_data});
  })
})
//once updated reload main page
router.put('/burgers/update', function(req, res){
  burger.update(req.body.burger_id, function(result){
    // console.log(result);
    res.redirect('/');
  });
});
//Post
router.post('/burgers/create', function(req, res){
  burger.create(req.body.burger_name, function(result){
    res.redirect('/');
  })
})

module.exports = router;
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/infantdiary');
mongoose.Promise = global.Promise;

//set up static files
app.use(express.static('public'));

// use body-parser middleware
app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/api'));

// error handling middleware
app.use(function(err, req, res, next){
    console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.port || 3000, function(){
    console.log('now listening for requests');
// });
// var express = require('express');
// var mongoose = require('mongoose');
// var bodyParser = require('body-parser');
//
// // MongoDB
// mongoose.connect('mongodb://localhost/infantdiary');
// var db =mongoose.connection
//
// // Express
// var app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
//
// app.use('/api', require('./routes/api'));
// //
//
//  app.get('/', (req, res) => {
//  	res.send('Please use /api/contactlist');
//  });
//
//  app.get('/api/contactlist', (req, res) => {
//    console.log("Error");
//  	Contactlist.getContactlist((err, contactlist) => {
//  		if(err){
//  			throw err;
//  		}
//  		res.json(contactlist);
//  	});
//  });
//
//
//  app.get('/api/contactlist/:_id', (req, res) => {
//  	Contactlist.getContactlistById(req.params._id, (err, contactlist) => {
//  		if(err){
//  			throw err;
//  		}
//  		res.json(contactlist);
//  	});
//  });
//
//
//  app.post('/api/contactlist', (req, res) => {
//  	var contactlist = req.body;
//
//  	Contactlist.addContactlist(contactlist, (err, contactlist) => {
//  		if(err){
//  			throw err;
//  		}
//  		res.json(contactlist);
//  	});
//  });
//
//
//  app.put('/api/contactlist/:_id', (req, res) => {
//  	var id = req.params._id;
//  	var contactlist = req.body;
//
//  	Contactlist.updateContactlist(id, contactlist, {}, (err, contactlist) => {
//  		if(err){
//  			throw err;
//  		}
//  		res.json(contactlist);
//  	});
//  });
//
//
//  app.delete('/api/contactlist/:_id', (req, res) => {
//  	var id = req.params._id;
//
//  	Contactlist.removeContactlist(id, (err, contactlist) => {
//  		if(err){
//  			throw err;
//  		}
//  		res.json(contactlist);
//  	});
//  });
//
// // // Start server
// // app.listen(3000);
// // console.log('API is running on port 3000');
//
//
//
// var port = process.env.PORT || 3000;        // set our port
//
//
// //
// // // ROUTES FOR OUR API
// // // =============================================================================
// // var router = express.Router();              // get an instance of the express Router
// //
// // // middleware to use for all requests
// // router.use(function(req, res, next) {
// //     // do logging
// //     console.log('Something is happening.');
// //     next(); // make sure we go to the next routes and don't stop here
// // });
// //
// // // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
// // router.get('/', function(req, res) {
// //     res.json({ message: 'hooray! welcome to our api!' });
// // });
// //
// // // more routes for our API will happen here
// //
// // // REGISTER OUR ROUTES -------------------------------
// // // all of our routes will be prefixed with /api
// // app.use('/infantdiaryapi', router);
//
//
// // START THE SERVER
// // =============================================================================
// app.listen(port);
// console.log('Magic happens on port ' + port);

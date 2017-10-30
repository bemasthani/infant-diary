
const express = require ('express');
const router = express.Router();
const Contactlist = require('../models/contactlist');

// get a list of Contactlist from the db
router.get('/Contactlist', function(req, res, next){
     Contactlist.find({}).then(function(ninjas){
        res.send(ninjas);
    });


// add a new Contactlist to the db
router.post('/Contactlist', function(req, res, next){
    Contactlist.create(req.body).then(function(Contactlist){
        res.send(Contactlist);
    }).catch(next);
});

// update a Contactlist in the db
router.put('/Contactlist/:id', function(req, res, next){
    Contactlist.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Contactlist.findOne({_id: req.params.id}).then(function(Contactlist){
            res.send(Contactlist);
        });
    }).catch(next);
});

// delete a Contactlist from the db
router.delete('/Contactlist/:id', function(req, res, next){
    Contactlist.findByIdAndRemove({_id: req.params.id}).then(function(Contactlist){
        res.send(Contactlist);
    }).catch(next);
});

module.exports = router;

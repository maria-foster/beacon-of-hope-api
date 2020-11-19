const UserModel = require('../../models/user.model');
// const User = require('../../../User')


// Initialize express router
let router = require('express').Router();
let bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({
    extended: true
 }));

var fs = require("fs");


//New user POST Routes
router.post('/', function (req, res) {
    var new_user = new UserModel(req.body);
    new_user.save(function(err, new_user){
        if(err)return console.error(err);
    });
    res.send(new_user)
});



//User GET Routes
router.get('/', function (req, res) {
    UserModel.find(function(err, newUsers){
        if(err)return console.error(err);
        res.send(newUsers)
    })
});

router.get('/:id', function (req, res) {
    var id = req.params.id
    UserModel.findById(id, function(err, newUser){
        if(err)return console.error(err);
        res.send(newUser)
    })
});

router.get('/findByAge/:age', function (req, res) {
    var userAge = req.params.age
    UserModel.find({age:userAge}, function(err, newUser){
        if(err)return console.error(err);
        res.send(newUser)
    })
});

router.get('/findByGender/:gender', function (req, res) {
    var userGender = req.params.gender
    UserModel.find({gender:userGender}, function(err, newUser){
        if(err)return console.error(err);
        res.send(newUser)
    })
});

router.get('/findByZipCode/:zip', function (req, res) {
    var zip = req.params.zip
    UserModel.find({zipCode:zip}, function(err, newUser){
        if(err)return console.error(err);
        res.send(newUser)
    })
});

router.get('/login/:username/:password', function (req, res) {
    var userPassword = req.params.password
    var userUserName = req.params.username
    UserModel.find({password:userPassword, username:userUserName}, function(err, newUser){
        if(err)return console.error(err);
        res.send(newUser)
    })
});


//User PUT Routes
router.put('/:id', function (req, res) {
    console.log(req.params.id)
    console.log(req.body)
    UserModel.findByIdAndUpdate(
        {_id : req.params.id},
         req.body,
        {new: true})
        .then (User => {
            res.json(User)
        })
        .catch(err => {
            if (err) return res.status(500).send(err);
        })
});

//Delete route
router.delete('/:id', function (req, res) {
    var id = req.params.id
    UserModel.findByIdAndDelete(id, function(err){
        if(err)return console.error(err);
        res.send("User deleted")
    })
});


// Export API routes
module.exports = router;
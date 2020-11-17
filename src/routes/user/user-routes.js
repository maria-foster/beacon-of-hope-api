const UserModel = require('../../models/user.model');


// Initialize express router
let router = require('express').Router();
let bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({
    extended: true
 }));

var fs = require("fs");


//New user POST Routes
router.post('/', function (req, res) {
    var new_user = new user(req.body);
    new_user.save(function(err, new_user){
        if(err)return console.error(err);
    });
});



//User GET Routes
router.get('/', function (req, res) {
    UserModel.find(function(err, newUsers){
        if(err)return console.error(err);
        console.log(newUsers);
        res.send(newUsers)
    })
});

router.get('/:id', function (req, res) {
    var id = req.params.id
    var User;
   UserModel.findById(id, function(err, newUser){
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

// Export API routes
module.exports = router;
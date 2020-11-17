const ThreadModel = require('../../models/thread.model');

// Initialize express router
let router = require('express').Router();
let bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({
    extended: true
 }));

var fs = require("fs");


//New thread POST Routes
router.post('/', function (req, res) {
    var new_thread = new thread(req.body);
    new_thread.save(function(err, new_thread){
        if(err)return console.error(err);
    });
});



//Thread GET Routes
router.get('/', function (req, res) {
    ThreadModel.find(function(err, newThreads){
        if(err)return console.error(err);
        res.send(newThreads)
    })
});

router.get('/:id', function (req, res) {
    var id = req.params.id
    var Thread;
   ThreadModel.findById(id, function(err, newThread){
        if(err)return console.error(err);
        res.send(newThread)
        
    })
});



//Thread PUT Routes
router.put('/:id', function (req, res) {
    console.log(req.params.id)
    console.log(req.body)
    ThreadModel.findByIdAndUpdate(
        {_id : req.params.id},
         req.body,
        {new: true})
        .then (Thread => {
            res.json(Thread)
        })
        .catch(err => {
            if (err) return res.status(500).send(err);
        })
});

// Export API routes
module.exports = router;
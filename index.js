const user = require('./src/models/user.model');
const thread = require('./src/models/thread.model');
const comment = require('./src/models/comment.model');

var fs = require('fs');
var https = require('https');
var http = require('http');
var path = require('path');

// Import express
let express = require('express')

// Initialize the app
let app = express()
let bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '10mb'
 }));
 app.use(bodyParser.json({
     extended : true,
     limit: '10mb'
 }));

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

//Params for API
port = 5500
//ip = "localhost"
ip = "52.167.218.141"

app.listen(port, ip, function () {
     console.log("Running API on  " +  ip  + ":" + port);
});


// Import routes
let userRoutes = require("./src/routes/user/user-routes")
let threadRoutes = require("./src/routes/thread/thread-routes")

app.use('/api/v1/users', userRoutes)
app.use('/api/v1/threads', threadRoutes)



/*************************************
 *      Connecting to MongoDB
 ************************************/

// Import Mongoose
let mongoose = require('mongoose');

// Connect to Mongoose and set connection variable
mongoIP = 0
mongoPort = "10255"
mongoHost = "navigatorteam6.mongo.cosmos.azure.com"
mongoDBName = "hackathon"
mongoUsername = "navigatorteam6"
mongoPassword = "tlpDjUMyAMmHnXNqv2hhVlZGyIki2sTjiGyS19GGS7wKIJM2KnS68vKyaoxf5JhBRCPg6WVUbvek3xdQiCqnXg=="

mongoose.connect("mongodb://"+mongoHost+":"+mongoPort+"/"+mongoDBName+"?ssl=true&replicaSet=globaldb", {
  auth: {
    user: mongoUsername,
    password: mongoPassword
  },
useNewUrlParser: true,
useUnifiedTopology: true,
retryWrites: false
})
.then(() => console.log('Connection to CosmosDB successful'))
.catch((err) => console.error(err));
var db = mongoose.connection;


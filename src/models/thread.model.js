const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let threadSchema = new Schema({
    
    content: {type : String},
    title: {type : String},
    likes: {type : Number},
    dislikes: {type : Number},
    user: {type : String},
    comments: {type : Array},
    flagged: {type : Boolean},
    category: {type : String},
    date: {type : String}
});

module.exports = mongoose.model("thread", threadSchema, "thread")
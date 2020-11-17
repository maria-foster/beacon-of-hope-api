const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let commentSchema = new Schema({
    
    content: {type : String},
    likes: {type : Number},
    dislkies: {type : Number},
    user: {type : mongoose.Schema.Types.Object},
    comments: {type : Array},
    flagged: {type : Boolean},
    category: {type : String},
});

module.exports = mongoose.model("comment", commentSchema)
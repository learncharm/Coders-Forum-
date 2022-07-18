const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new Schema({
    userid : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    threadid : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('comment',CommentSchema);
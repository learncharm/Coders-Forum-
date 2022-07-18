const mongoose = require('mongoose');
const { Schema } = mongoose;

const ThreadSchema = new Schema({
    userid : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    title : {
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

module.exports = mongoose.model('thread',ThreadSchema);

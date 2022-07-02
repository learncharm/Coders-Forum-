const mongoose = require('mongoose');
const { Schema } = mongoose;

const CategorySchema = new Schema({
  title : {
    type : string,
    required : true
  },
  description : {
    type : string,
    required : true
  },
  date : {
    type : Date,
    default : Date.now
  }
});

module.exports = mongoose.model('category',CategorySchema);

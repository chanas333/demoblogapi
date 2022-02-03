var mongoose = require('mongoose');
var blogSchema = mongoose.Schema({
    author:String,
    title:String,
    desc:String,
    category:String
})




module.exports = mongoose.model("blogs",blogSchema)

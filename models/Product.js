const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
   title:String,
   author:String,
   summary:String
});

module.exports = mongoose.model("products",productSchema)

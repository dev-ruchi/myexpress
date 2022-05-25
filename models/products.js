const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    


  });
  
  const Product = mongoose.model('Products', schema);
  
  module.exports = Product
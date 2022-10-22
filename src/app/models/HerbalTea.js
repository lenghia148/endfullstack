const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const HerbalTea = new Schema({
    name: { type: String, default: '' },
    image: { type: String, default: '' },
    price: { type: Number, min: 18, index: true },
  });

module.exports = mongoose.model('HerbalTea', HerbalTea);
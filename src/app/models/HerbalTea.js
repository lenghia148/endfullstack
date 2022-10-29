const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const HerbalTea = new Schema({
    name: { type: String, default: '' },
    image: { type: String, default: '' },
    price: { type: Number, min: 18, index: true },
    slug: {type:String, slug:'name', unique:true}
  });

module.exports = mongoose.model('HerbalTea', HerbalTea); 
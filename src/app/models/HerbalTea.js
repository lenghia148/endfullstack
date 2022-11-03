const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');



const Schema = mongoose.Schema;

const HerbalTea = new Schema({
    name: { type: String, default: '' },
    image: { type: String, default: '' },
    price: { type: Number, min: 18, index: true },
    slug: {type:String, slug:'name', unique:true}
  });

  //add plug in
mongoose.plugin(slug);
HerbalTea.plugin(mongooseDelete,{
  deletedAt:true,
  overrideMethods: 'all'})

module.exports = mongoose.model('HerbalTea', HerbalTea); 
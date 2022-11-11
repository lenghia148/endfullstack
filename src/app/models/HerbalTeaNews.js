const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');



const Schema = mongoose.Schema;

const HerbalTeaNews = new Schema({
    name: { type: String, default: '' },
    image: { type: String, default: '' },
    detail: { type: String,  default: ''},
  
  });

//   //add plug in
// mongoose.plugin(slug);
// HerbalTeaNews.plugin(mongooseDelete,{
//   deletedAt:true,
//   overrideMethods: 'all'})

module.exports = mongoose.model('HerbalTeaNews', HerbalTeaNews); 
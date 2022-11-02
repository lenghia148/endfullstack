//hàm connect tới db
const mongoose = require('mongoose');

async function connect(){
   try
    {
        await mongoose.connect('mongodb://localhost:27017/i_love_tea_product_dev');
        console.log("I'm Ok!");
   
    }
    catch(error){
        
    }
}
module.exports = {connect}
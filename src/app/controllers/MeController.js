const HerbalTea = require('../models/HerbalTea')
const  { mutipleMongooseToObj } = require('../../util/mongoose')

class MeController {
  
//[GET] /me/stored/products
    index(req,res,next)
    {
        HerbalTea.find({})
        .then(herbalTeas=> res.render('me/stored-products',{
            herbalTeas: mutipleMongooseToObj(herbalTeas)}))
        .catch(next)
    }   

    
}
module.exports=  new MeController() ;
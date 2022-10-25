const HerbalTea = require('../models/HerbalTea')
const  { mutipleMongooseToObj } = require('../../util/mongoose')
class SiteController {
    //[GET] / 
    show(req,res,next)
    {
        res.send("hello");
    }
    index(req,res,next)
    {
    
        HerbalTea.find({})
            .then (herbalTeas => res.render('home',
            {
                herbalTeas:mutipleMongooseToObj(herbalTeas)
            }))
            .catch(next)
        
    }

    
}
module.exports=  new SiteController;
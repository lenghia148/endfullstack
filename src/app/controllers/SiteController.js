const HerbalTea = require('../models/HerbalTea')

class SiteController {
    //[GET] / 
    index(req,res)
    {
        // res.render('home')
        HerbalTea.find({},function(err,herbalTeas){
         
            if(!err) res.json(herbalTeas)
            // res.status(400).json({error:"Error!!!"})

        })
    
        
    }
}
module.exports=  new SiteController;
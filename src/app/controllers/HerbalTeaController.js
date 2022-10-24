const HerbalTea = require('../models/HerbalTea')
const  { mutipleMongooseToObj } = require('../../util/mongoose')
class HerbalTeaController {
    //[GET] / 
    show(req,res,next)
    {   
    //    let slug = req.params.slug
        HerbalTea.findOne({ slug:req.params.slug})
        .then(herbalTeas=> {
            res.render('herbalteas/show');
        })
        .catch(next)
    }
    index(req,res,next)
    {
    
        // HerbalTea.find({})
        //     .then (herbalTeas => res.render('herbalTea',
        //     {
        //         herbalTeas:mutipleMongooseToObj(herbalTeas)
        //     }))
        //     .catch(next)
        res.send("Có cái gì đâu mà nhìn")
        
    }

    
}
module.exports=  new HerbalTeaController;
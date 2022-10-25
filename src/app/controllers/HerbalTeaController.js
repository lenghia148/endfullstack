const HerbalTea = require('../models/HerbalTea')
const  { mongooseToOjb } = require('../../util/mongoose')
class HerbalTeaController {
    //[GET] / 
    show(req,res,next)
    {   
    //    let slug = req.params.slug
        HerbalTea.findOne({ slug: req.params.slug})
        .then(herbalTeas=> {
            if(herbalTeas){
                res.render('herbalteas/show',{herbalTeas:mongooseToOjb(herbalTeas)});
            }
           else console.log('null');
        })
        .catch(next)
    }
    create(req,res,nex)
    {
        res.render('herbalteas/create')
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
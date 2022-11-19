const HerbalTea = require('../models/HerbalTea')
const HerbalTeaNews = require('../models/HerbalTeaNews')
const  { mutipleMongooseToObj } = require('../../util/mongoose')

class SiteController {
    //[GET] /
    //[get] /contact 
    contact(req,res,next)
    {
        res.render("contact")
    }
    //[get] /wholesale 
    wholesale(req,res,next)
    {
        res.render("wholesale")
    }
    //[get] /introduce 
    introduce(req,res,next)
    {
        res.render("introduce")
    }
    index(req,res,next)
    {
    
        // HerbalTea.find({})
        //     .then (herbalTeas => res.render('home',
        //     {
        //         herbalTeas:mutipleMongooseToObj(herbalTeas)
        //     }))
        //     .catch(next)
        Promise.all([HerbalTea.find({}), HerbalTeaNews.find({})])
            .then(([herbalTeas, herbalTeaNews]) => 
                res.render("home", {
                herbalTeaNews: mutipleMongooseToObj(herbalTeaNews),
                herbalTeas: mutipleMongooseToObj(herbalTeas),
                })
            )
          .catch(next);
        
    }

    
}
module.exports=  new SiteController();
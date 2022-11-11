const HerbalTea = require('../models/HerbalTea')
const HerbalTeaNews = require('../models/HerbalTeaNews')
const  { mutipleMongooseToObj } = require('../../util/mongoose')
class SiteController {
    //[GET] / 
  
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
const HerbalTea = require('../models/HerbalTea')
class NewsController {
    //[GET] / news/hello
  
//[GET] / news
    index(req,res)
    {
        res.render('news')
    }

    
}
module.exports=  new NewsController();
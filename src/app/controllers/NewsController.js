const Test = require('../models/Test')
class NewsController {
    //[GET] / news/hello
    show(req,res)
    {
       Test.find({},function(err,tests)
       {
        if(!err) res.json(tests)
       })
    }
//[GET] / news
    index(req,res)
    {
        res.render('news')
    }

    
}
module.exports=  new NewsController
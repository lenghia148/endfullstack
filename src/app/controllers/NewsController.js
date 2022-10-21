class NewsController {
    //[GET] / news/hello
    show(req,res)
    {
        res.send('Hello Handsom Guy!')
    }
//[GET] / news
    index(req,res)
    {
        res.render('news')
    }

    
}
module.exports=  new NewsController
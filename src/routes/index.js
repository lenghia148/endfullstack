//chúng ta sẽ chuyển các path qua file index này
//file chung
const newsRouter =require('./news');
const siteRouter =require('./site');
const herbalTeaRouter = require('./herbalTea')
 function route(app)
{   
    app.use('/herbal-tea',herbalTeaRouter)
    app.use('/news',newsRouter)
    app.use('/',siteRouter)

    
    
}
module.exports = route;
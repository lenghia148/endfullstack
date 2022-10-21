//chúng ta sẽ chuyển các path qua file index này
//file chung
const newsRouter =require('./news');
const siteRouter =require('./news');
 function route(app)
{   

    app.use('/news',newsRouter)
    app.use('/',siteRouter)

    
    
}
module.exports = route
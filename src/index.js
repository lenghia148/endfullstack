const express = require('express')
const path = require('path')
const hbs  = require('express-handlebars')
const route = require('./routes')
const app =  express();
const port = 3000;

//handlebar 
app.use(express.static(path.join(__dirname, 'public')));


app.engine('hbs', hbs.engine({
    extname:".hbs"
}))
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'resources/views'));


route(app)

// app.get('/', (req, res) => {
//     //  res.send('hello world!!!')
//     res.render('home');
// });

// app.get('/news', (req, res) => {
//     console.log(req.query);
//     res.render('news');
// });
app.listen(port,()=> console.log(`Listenning at http://localhost:${port}`));
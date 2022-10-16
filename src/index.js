import express from 'express';
import { engine } from 'express-handlebars';
const app =  express();
const port = 3000;

//handlebar 



app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './src/resources/views');

app.get('/', (req, res) => {
    //  res.send('hello world!!!')
    res.render('home');
});

app.get('/news', (req, res) => {
    
    res.render('news');
});
app.listen(port,()=> console.log(`Listenning at http://localhost:${port}`));
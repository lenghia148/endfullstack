import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';


import { engine } from 'express-handlebars';
const app =  express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//handlebar 
app.use(express.static(path.join(__dirname, 'public')));


app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'resources/views'));

app.get('/', (req, res) => {
    //  res.send('hello world!!!')
    res.render('home');
});

app.get('/news', (req, res) => {
    
    res.render('news');
});
app.listen(port,()=> console.log(`Listenning at http://localhost:${port}`));
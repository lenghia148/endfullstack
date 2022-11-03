const express = require('express')
const path = require('path')
const hbs  = require('express-handlebars')
const route = require('./routes')
const methodOverride = require('method-override')
const app =  express();
const port = 3000;
const db =  require('./config/db');
const { helpers } = require('handlebars');
const $ = require( "jquery" );

//connect to db
db.connect()
//handlebar 
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded())
app.use(express.json())

//method-override 
app.use(methodOverride('_method'))
app.engine('hbs', hbs.engine({
    extname:".hbs",
    helpers:{
        sum:(a,b)=>  a+b,
    }
}))
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'resources/views'));


route(app)

app.listen(port,()=> console.log(`Listenning at http://localhost:${port}`));
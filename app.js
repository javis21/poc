var express = require('express');
var app = express();
var path =  require('path');
var expresshbs = require('express-handlebars');
var bodyparser = require('body-parser');
const mysql = require("mysql");
const dotenv = require('dotenv');


dotenv.config({path:'./.env'});


var PORT = process.env.PORT || 4500;


app.engine('hbs', expresshbs.engine({defaultlayout:'base',extname:'hbs'}));
//viewss
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'views'));

const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath)); 



//middlewares 
app.use(bodyparser.json());
app.use(express.urlencoded({extended: false}));
app.use(express.json());




//routes 
var indexrouter = require('./routes/index');
var questionrouter = require('./routes/question');


// routes location
app.use('/index', indexrouter);
app.use('/question', questionrouter);
// app.use('/', pagesrouter);

app.use('/',require('./routes/pages'));
app.use('/',require('./routes/page2'));
app.use('/',require('./routes/page3'));
app.use('/',require('./routes/page31'));

app.use('/',require('./routes/page4'));
app.use('/',require('./routes/page5'));

app.use('/assess',require('./routes/assess'));

app.use('/auth',require('./routes/auth'));
app.use('/auth2',require('./routes/auth2'));



app.listen(PORT, ()=>{

    console.log('server runinng 4500');
})
var express = require('express');
var app = express();
var db = require('./config/database');
var properties = require('./config/properties');
var bodyParser = require('body-parser')
var log = require('morgan')('dev');

var herosRoutes = require('./api/heros/heros.routes');

var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({extended:true});

var router = express.Router();

db();

//configure app.use
app.use(log);
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

//Error handeling
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
  next();
});

//use express router
app.use('/api',router);

//call heros routing
herosRoutes(router);

//initialise server
app.listen(properties.PORT,(req,res)=>{
    console.log(`Server is running on ${properties.PORT} port.`);
})

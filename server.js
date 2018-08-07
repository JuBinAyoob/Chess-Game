const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
//Connecting to mongodb
mongoose.connect('mongodb://admin:admin123@127.0.0.1:27017/admin');
let db = mongoose.connection;

db.once('open',function(){
  console.log('Connected to MongoDb');
});
db.on('error',function(err){

  console.log('Error in connection... Error:'+err);
});


let app = express();

//Load view engine
app.set("views",path.join(__dirname,"views"));
app.set("view engine","pug");
app.use("/static", express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Bring in models
let Game=require('./models/chess');

app.get('/',function(req,res){
    res.status(200).render('index');
});

app.listen(process.env.port||8000);


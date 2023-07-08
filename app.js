"use strict"

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;

var routes = require('./src/bin/routes'); 

mongoose.connect("mongodb://localhost:27017/PROYECTO", (err, res) => {
    if(err){
        console.log(err);
    }else {
        app.listen(port, function(){
            console.log(`Server running on ` + port);
    });
 }
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: "50mb",extended: true}));

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*'); 
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
    next();
});


app.use("/api",routes)

exports.app = app;
var express=require('express');

var bodyParser = require("body-parser").urlencoded({extended:true});//post

var app =express();


app.use(bodyParser);

app.use(express.static('public'));


app.use('/index',function(req,res){
    console.log(req.body);

    res.send('我是数据库里面的数据');

})

app.listen(80);





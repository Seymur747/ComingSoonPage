const express=require('express')
const app=express();
const fs=require('fs')
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

fs.readFile('./codes.json','utf-8',(err,data)=>{
    if(err) console.log(err)
    console.log(JSON.parse(data).codes.length)
})
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()



app.post('/',jsonParser,(req,res)=>{
    console.log(req.body)
    res.send(JSON.stringify('salam'))
})
app.listen(3001)
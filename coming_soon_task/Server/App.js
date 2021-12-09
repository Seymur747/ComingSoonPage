const express=require('express')
const app=express();
const fs=require('fs')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
app.use(jsonParser)

let codeDatas=JSON.parse(fs.readFileSync('./codes.json','utf-8'))


app.get('/',(req,res)=>{
    res.cookie('test',13)
    res.send('he')
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


  let myLogger = (req, res, next) =>{
      let result=req.body;
        if(result.code==null||result.code==''){
            res.send(false)
        }
        else{
            
            req.result=JSON.stringify(check(req.body.code,codeDatas.codes))
           next()
        }
  };

  
app.use(myLogger)
app.post('/',jsonParser,(req,res)=>{

    res.send(req.result)
})


app.listen(3001)
let  check=(code,arr)=>{
    for(var i=0;i<arr.length;i++){
            if(code===arr[i]){
                return 1;
            }
        }
    return 0;
}
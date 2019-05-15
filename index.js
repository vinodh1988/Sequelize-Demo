var express=require('express');
var path=require("path");
var data=require('./Server/routes/data');

app=express();
bodyParser = require('body-parser');
/*function Temp(){
console.log(this);
}

Temp();*/

app.use(express.static(path.join(__dirname,"Client/public/styles/")));
app.use(express.static(path.join(__dirname,"Client/public/scripts/")));
app.use(express.static(path.join(__dirname,"node_modules/bootstrap/dist")));
app.use(express.static(path.join(__dirname,"node_modules/jquery/dist")));
app.use(express.static(path.join(__dirname,"node_modules/popper.js/dist")));
app.use(bodyParser.urlencoded());

app.set('views', path.join(__dirname, 'Client/public/views'));
app.set('view engine', 'pug');

app.use("/json",data);

app.get("/",function(request,response){
    response.send("First Node JS Express APP");
})

app.get("/home",function(request,response){
    response.sendFile(path.join(__dirname,"Client/public/index.html"));
})

app.get("/getFile",function(request,response){
    response.sendFile(path.join(__dirname,"log4j.jar.zip"));
});

app.listen("7867",function(){
   console.log("Server started in port 7867");
});

//npm install --save express
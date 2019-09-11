var express=require('express');
var path=require("path");
var data=require('./Server/routes/data');
var postgre=require("./Server/routes/postgre");

app=express();
bodyParser = require('body-parser');
/*function Temp(){
console.log(this);
}

Temp();*/
//configuring static  resources to access directly without any routing mechanism
app.use(express.static(path.join(__dirname,"Client/public/styles/")));
app.use(express.static(path.join(__dirname,"Client/public/scripts/")));
app.use(express.static(path.join(__dirname,"node_modules/bootstrap/dist")));
app.use(express.static(path.join(__dirname,"node_modules/jquery/dist")));
app.use(express.static(path.join(__dirname,"node_modules/popper.js/dist")));

//If you send form data, if you have to parse the request body

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'Client/public/views'));//setting the path of template files
app.set('view engine', 'pug'); //configuring view Engine

app.use("/json",data); // redirecting a route to other handler
app.use("/postgre",postgre);

app.get("/",function(request,response){
    response.send("First Node JS Express APP");
})

app.get("/home",function(request,response){
    response.sendFile(path.join(__dirname,"Client/public/index.html"));
}) //to handle routes

app.get("/getFile",function(request,response){
    response.sendFile(path.join(__dirname,"log4j.jar.zip"));//to send file as response
});

app.listen("7867",function(){
   console.log("Server started in port 7867");
}); //To create a listner

//npm install --save express
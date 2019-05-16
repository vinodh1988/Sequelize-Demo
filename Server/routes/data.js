var express=require('express');
var route=express.Router();
var fs=require('fs');
var path=require('path');

route.post("/store",function(request,response){
    let sno=request.body.sno;
    let name=request.body.name;
    let city=request.body.city;
   fs.readFile(path.join(__dirname,"../data/data.json"),'utf8',function(err,data){
       console.log(err);
       if(err)
       response.send("Some Server error!!!!!");
       let people=JSON.parse(data);
       let person={sno: sno,name:name,city:city};
       people.push(person);
       fs.writeFile(path.join(__dirname,"../data/data.json"),JSON.stringify(people),function(err){
           if(err)
              response.send("Unable to store data"); //to send text as response
           else
                response.send("Stored Successfully");

       })
    
   })
})

    route.get("/people",function(request,response){
        fs.readFile(path.join(__dirname,"../data/data.json"),'utf8',function(err,data){
              if(err)
                 response.send("No Data Found");
              response.render("people",{programmer:"Vinodh",people:JSON.parse(data)});
              //to give control to a template engine
        });

        
    })

module.exports=route;
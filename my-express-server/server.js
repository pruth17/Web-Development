//jslint esversion:6
const express = require('express');
const app = express();

app.get("/", function(request, response){
  response.send("Hello");
});


app.listen(3000, function(){
  console.log("sever started at port 3000");
});

app.get("/about", function(req, res){
  res.send("I am Pruthvi ");
});

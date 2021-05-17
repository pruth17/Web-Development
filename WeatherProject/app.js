const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
  extended:true
}));

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {

  res.sendFile(__dirname + "/index.html")

});

app.post("/", function(req, res){
  const query = req.body.City;
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid=a53bc7014aefc080fbb732f9de7c0b15&units=imperial";
  https.get(url, function(response) {

    console.log(response.statusCode);

    response.on("data", function(data){

      const weatherData = JSON.parse(data);

      if(weatherData == null) {
        res.write("<h1> Incorrect City </h1>");
        res.send();
      }
      else {
        if(weatherData.main == null){
          res.write("<h1> Incorrect City </h1>");
          res.send();
        }
        else {
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imgaeurl = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
      res.write("<h1>The temperature in " + query + " is " + temp + " degrees fahrenheit </h1>");
      res.write("<p>The weather is currently " + description + "</p>");
      res.write("<img src=" +  imgaeurl + ">");
      res.send();
    }
    }
    });

  });

});



app.listen(3000, function(){
  console.log("Server is running at port 3000.");
});

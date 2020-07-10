const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  var ans = req.body.num1 + req.body.num2;
  res.send("The addition is: " + ans);
});

app.get("/bmi", function(req, res) {
  res.sendFile(__dirname + "/bmi");
});

app.post("/bmi", function(req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmiC = weight / Math.pow(height, 2);

  res.send("The bmi is " + bmiC);
});

app.listen(3000);

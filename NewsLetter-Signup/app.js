
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended:true
}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
  const firstName = req.body.fname;
  const lastName = req.body.lname;
  const email = req.body.email;

  const data = {
    members:[
      {
        email_address: email,
        status: "subscribed",
        merge_fields:{
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);
  https.get(url, function(){

  });


});


app.listen(3000, function(){
  console.log("server is running at port 3000");
});

// 2d2f92b3077cb036fbd9f06aebedd562-us10
// 7f69dee3b0

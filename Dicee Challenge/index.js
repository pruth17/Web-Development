var random1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "images/dice" + random1 + ".png";

var random2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 =  "images/dice" + random2 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage1);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);

var heading = document.querySelector("h1");

if(random1 > random2){
  heading.innerHTML = "Player1 won!"
}
else if(random2 > random1){
  heading.innerHTML = "Player2 won!"
}

else {
  heading.innerHTML = "Draw!"
}

var randomNumber = Math.floor(Math.random()*6)+1;

var randomImage = "images/dice"+randomNumber+".png";

var img1 = document.querySelectorAll("img")[0];


img1.setAttribute("src", randomImage);


var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImage2 = "images/dice"+randomNumber2+".png"

var img2  = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImage2);

if(randomNumber>randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 wins!"
}

else if (randomNumber2>randomNumber)
{
   document.querySelector("h1").innerHTML = "Player 2 wins!"
}

else
{
    document.querySelector("h1").innerHTML = "Draw!";
}


let a=Math.floor(Math.random()*6)+1;
let b="dice"+a+".png";
document.querySelector(".dice1").setAttribute("src",b);

var r=Math.floor(Math.random()*6)+1;
var c="dice"+r+".png";
document.querySelector(".dice2").setAttribute("src",c);


if(a>r){
    document.querySelector("h1").innerHTML="🚩PLAYER 1 WINS";
}
else if(a<r){
    document.querySelector("h1").innerHTML="PLAYER 2 WINS 🚩";
}
else{
    document.querySelector("h1").innerHTML="DRAW!";
}



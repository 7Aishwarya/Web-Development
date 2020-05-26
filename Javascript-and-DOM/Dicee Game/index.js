var randomNumber1=Math.floor(((Math.random() * 100) % 6) + 1);
console.log(randomNumber1);
var image_name1 = "./images/dice" + randomNumber1 + ".png";
console.log(image_name1);
document.querySelectorAll("img")[0].setAttribute("src",image_name1);

var randomNumber2=Math.floor(((Math.random() * 100) % 6) + 1);
var image_name2 = "./images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",image_name2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
}
else{
    document.querySelector("h1").innerHTML = "🚩Both win🚩";
}
function randomNumber(){
    let random= Math.floor(Math.random() * 6)+1;
    return random;
}
let playerOneRandom = randomNumber() - 1;
let playerTwoRandom = randomNumber() - 1;
let playerOneNum = document.querySelectorAll(".p1-num")[playerOneRandom];
let playerTwoNum = document.querySelectorAll(".p2-num")[playerTwoRandom];
let starterMode1 = document.querySelectorAll(".starter-mode")[0];
let starterMode2 = document.querySelectorAll(".starter-mode")[1];
starterMode1.style.display = "none"
starterMode2.style.display = "none"
//console.log(randomNumber())
//console.log(playerOneNum.length)
playerOneNum.style.display = "flex"
playerTwoNum.style.display = "flex"
if (playerOneRandom > playerTwoRandom){
    console.log("Plyer one won");
}else if (playerOneRandom < playerTwoRandom){
    console.log("Player two won");
}else{
    console.log("it is a tie");
}
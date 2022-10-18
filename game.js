function randomNumber(){
    let random= Math.floor(Math.random() * 6)+1;
    return random;
}
let temp = []

document.querySelector(".start-btn").addEventListener("click",function (){
document.querySelectorAll(".starter-mode")[0].style.setProperty("display","none");
document.querySelectorAll(".starter-mode")[1].style.setProperty("display","none");
let playerOneRandom = randomNumber() - 1;
let playerTwoRandom = randomNumber() - 1;
document.querySelectorAll(".p1-num")[playerOneRandom].style.setProperty("display","flex");
document.querySelectorAll(".p2-num")[playerTwoRandom].style.setProperty("display","flex");
temp.push(document.querySelectorAll(".p1-num")[playerOneRandom])
temp.push(document.querySelectorAll(".p2-num")[playerTwoRandom])
document.querySelector(".start-btn").style.setProperty("display", "none");
document.querySelector(".reset-btn").style.setProperty("display", "block");
let theWinnerIs = document.querySelector(".header-title h1");
if (playerOneRandom > playerTwoRandom){
    theWinnerIs.innerText = "ربح اللاعب الأول";
}else if (playerOneRandom < playerTwoRandom){
    theWinnerIs.innerText = "ربح اللاعب الثاني";
}else{
    theWinnerIs.innerText = "ما أحد يزعل تعادل";
}
})

document.querySelector(".reset-btn").addEventListener("click", function (){
    if (temp.length !== 0){
        temp[0].style.setProperty("display","none");
        temp[1].style.setProperty("display","none");
        document.querySelectorAll(".starter-mode")[0].style.setProperty("display","flex");
        document.querySelectorAll(".starter-mode")[1].style.setProperty("display","flex");
        document.querySelector(".start-btn").style.setProperty("display", "block");
        document.querySelector(".reset-btn").style.setProperty("display", "none");
        document.querySelector(".header-title h1").innerText ="جرب حظك";
    }
    temp = [];
})

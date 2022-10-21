function randomNumber(){
    let random= Math.floor(Math.random() * 6)+1;
    return random;
}
let temp = []

$(".start-btn").click(function (){
$(".starter-mode").css("display","none");
let playerOneRandom = randomNumber() - 1;
let playerTwoRandom = randomNumber() - 1;
let playerOneCard = $(".p1-num").eq(playerOneRandom).css("display","flex");
let playerTwoCard = $(".p2-num").eq(playerTwoRandom).css("display","flex");
temp.push(playerOneCard);
temp.push(playerTwoCard);
$(".start-btn").css("display", "none");
$(".reset-btn").css("display", "block");
let theWinnerIs = $(".header-title h1");
if (playerOneRandom > playerTwoRandom){
    theWinnerIs.text("ربح اللاعب الأول");
}else if (playerOneRandom < playerTwoRandom){
    theWinnerIs.text("ربح اللاعب الثاني")
}else{
    theWinnerIs.text("ما أحد يزعل تعادل")
}
})

$(".reset-btn").click(function (){
    if (temp.length !== 0){
        temp[0].css("display","none");
        temp[1].css("display","none");
        $(".starter-mode").css("display","flex");
        $(".start-btn").css("display", "block");
        $(".reset-btn").css("display", "none");
        $(".header-title h1").text("جرب حظك");
    }
    temp = [];
})

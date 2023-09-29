let playerScore = 0;
let pcScore = 0;
let playerScoreLabel = document.getElementById("player-score");
let pcScoreLabel = document.getElementById("pc-score");
const scoreBoard = document.querySelector(".score-board");
let resultdiv = document.querySelector(".result"); 
let gameStatus = document.getElementById("status");
const rockdiv = document.getElementById("rock");
const paperdiv = document.getElementById("paper");
const scissorsdiv = document.getElementById("scissors");

function getComputedChoice(){
    const choices = ["rock","paper","scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
getComputedChoice();

function game(userChoice)
{
    const computerChoice = getComputedChoice();

    switch(userChoice + computerChoice)
    {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
              gameStatus.innerHTML = "player move=> "+ userChoice + " " + "pc move=> " + computerChoice;    
              resultdiv.lastElementChild.innerHTML = "You win!";
              playerScore += 1  
              playerScoreLabel.innerHTML =  playerScore;
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            gameStatus.innerHTML = "player move=> "+ userChoice + " " + "pc move=> " + computerChoice;
            resultdiv.lastElementChild.innerHTML = "You losse!";
            pcScore +=1;
            pcScoreLabel.innerHTML = pcScore;
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            gameStatus.innerHTML = "player move=> "+ userChoice + " " + "pc move=> " + computerChoice;
            resultdiv.lastElementChild.innerHTML = "draw";
            break;
    }
}

function main()
{
    rockdiv.addEventListener('click', ()=>{
        game("rock");
    });
    paperdiv.addEventListener('click', ()=>{
        game("paper");
    });
    scissorsdiv.addEventListener('click', ()=>{
        game("scissors");
    });
}

main();
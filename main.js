
var playerPoint = 0;
var computerPoint = 0;
const userScore_p = document.querySelector(".human > p");
const computerScore_p = document.querySelector(".machine > p");
const result_p = document.querySelector('.result > p');
const rock = document.getElementById('rock')
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');


const weapons = ["rock", "paper", "scissors"];
// set the computer random choice
function getComputerChoice(){
    const choice = weapons[Math.floor(Math.random() * weapons.length)];
    return choice;
}
function getPlayerChoice() {
    rock.addEventListener("click", function () {
     checkWinner("rock");
    });
    paper.addEventListener("click", function() {
         checkWinner("paper");
    });
    scissors.addEventListener("click", function() {
        checkWinner("scissors")
    });
    
}
function checkWinner(playerSelection) {
    const computerSelection = getComputerChoice();
    
    if (playerSelection == computerSelection) {
        result_p.textContent = "Tie";
    } else if ((playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")) {
        result_p.textContent = "player Winnnn";
        playerPoint++;
        userScore_p.innerHTML = playerPoint
    } else {
        result_p.textContent = "Player lost!!!!";
        computerPoint++;   
        computerScore_p.innerHTML = computerPoint;
    }
}
function game() {
    for (let i = 0; i < 5; i++) {
        if (playerPoint > computerPoint) {
        result_p.innerHTML = "you won the game"
      } else if (playerPoint < computerPoint) {
        result_p.innerHTML = "you lose the game"
      } else {
        result_p.innerHTML = "Drawwww"
      }
   }
}


game()
checkWinner();
getPlayerChoice();
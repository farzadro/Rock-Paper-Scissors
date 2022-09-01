const weapons = ["rock", "paper", "scissors"];
// set the computer random choice
function getComputerChoice(){
    const choice = weapons[Math.floor(Math.random() * weapons.length)];
    return choice;
}
// set the player choice

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Take One Of These Weapons : Rock, Paper or Scissors");
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(weapons.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}
 
// set the each of play round and possibility of every of condition exist.

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        return "It's a Tie!. Fine, I do it myself."
    }
    else if(result == "Player"){
        return `You Win!, Fatality. `
    }
    else{
        return `You Lose! HA HA HA ... `
    }
}

// set which of user or computer condition to win or lose or even a tie to per a round.
function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    }
    else {
        return "Computer";
    }
}

// finally, set the game funcyion with 5 round game with for loop

function game(){
    var playerPoint = 0;
    var computerPoint = 0;
    console.log("The WAR JUST BEGuN!")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if(checkWinner(playerSelection, computerSelection) == "Player"){
            playerPoint++;
        } 
        else if(checkWinner(playerSelection, computerSelection) == "Computer"){
            computerPoint++;
        }
    }
    console.log("Game Over")
    if(playerPoint > computerPoint){
        console.log("Player Wins. Player takes everything");
    }
    else if(playerPoint < computerPoint){
        console.log("Computer Wins. Player lost this realm ");
    }
    else{
        console.log("We have a tie!. See you in the next Round looser");
    }
}

game()
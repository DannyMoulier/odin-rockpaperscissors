function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "tie"
    }

    else if ((playerChoice === 'scissors' && computerChoice === 'paper')){
        return "player"
    }

    else if ((playerChoice === 'paper' && computerChoice === 'rock')){
        return "player"
    }

    else if ((playerChoice === 'rock' && computerChoice === 'scissors')){
        return "player"
    }

    else {
        return "computer"
    }

}

function game() {
    let computerScore = 0;
    let playerScore = 0;

    let playerChoice = prompt('Rock, paper, or Scissors?').toLowerCase();
    console.log(`Your choise was: ${playerChoice}.`);
    let computerChoice = getComputerChoice();
    console.log(`Computer choise was: ${computerChoice}.`);
    let result = playRound(playerChoice, computerChoice);
    console.log(result);

    if (result === "player") {
        playerScore ++
    }

    else if (result === "computer") {
        computerScore ++
    };

    console.log(playerScore);
    console.log(computerScore);
}

game()
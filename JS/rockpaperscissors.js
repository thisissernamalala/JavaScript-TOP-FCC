const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;


const getComputerChoice = () => {
    let rando = Math.floor(Math.random() * 3);
    return choices[rando];
}

console.log(getComputerChoice());

function getHumanChoice() {
    let answer = prompt(`Enter your choice ${choices}: `);
    return answer;
}

console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
    let result = "";
    if (humanChoice === "rock" && computerChoice === "paper") {
        result = "You have Won. PLAY AGAIN :)";
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        result = "You have Won. PLAY AGAIN :)";
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        result = "You have Won. PLAY AGAIN :)";
    }
    else if (computerChoice === "rock" && humanChoice === "scissors") {
        result = "You have Lost. Computer has Won. TRY AGAIN :(";
    }
    else if (computerChoice === "paper" && humanChoice === "rock") {
        result = "You have Lost. Computer has Won. TRY AGAIN :(";
    }
    else if (computerChoice === "scissors" && humanChoice === "paper") {
        result = "You have Lost. Computer has Won. TRY AGAIN :(";
    }
    else {
        result = "It's a TIE. TRY AGAIN !! ";
    }
    return result;
}

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
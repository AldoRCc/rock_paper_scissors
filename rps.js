let computerRandom = (Math.floor(Math.random()*3))
let humanChoice = prompt("ROCK, PAPER, SCISSORS. CHOOSE!!!");
humanChoice = humanChoice.toLowerCase();

function getHumanChoice(){
    if (humanChoice == "rock"){
        console.log("Player chose rock!!!");
        return humanChoice = 0;
    }
    else if (humanChoice == "paper"){
        console.log("Player chose paper!!!")
        return humanChoice = 1;
    }
    else if (humanChoice == "scissors"){
        console.log("Player chose scissors!!!")
        return humanChoice = 2;
    }
    else{
        console.log("Not a valid choice :(")
        return humanChoice = 3;
    }
}
getHumanChoice();

let computerChoice;
function getComputerChoice(){
    if (computerRandom == 0){
        console.log("Computer chose rock!!!");
        return computerChoice = 0;
    }
    else if (computerRandom == 1){
        console.log("Computer chose paper!!!");
        return computerChoice = 1;
    }
    else if (computerRandom == 2){
        console.log("Computer chose scissors!!!");
        return computerChoice = 2;
    }
}
getComputerChoice(computerRandom);

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice){
    if(humanChoice == 0 && computerChoice == 1){
        computerScore += 1;
        console.log("Computer won, score +1!!")
    }
    else if (humanChoice == 1 && computerChoice == 2){
        computerScore += 1;
        console.log("Computer won, score +1!!")
    }
    else if (humanChoice == 2 && computerChoice == 0){
        computerScore += 1;
        console.log("Computer won, score +1!!")
    }
    else if (humanChoice === computerChoice){
        console.log ("Draw")
    }
    else{
        humanScore += 1;
        console.log("Human won, score +1!!")
    }
}

playRound(humanChoice, computerChoice)


console.log (computerScore)
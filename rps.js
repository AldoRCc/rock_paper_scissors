let computerRandom;
let result;

function getHumanChoice(){
    let choice = prompt("ROCK, PAPER, SCISSORS. CHOOSE!!!");
    choice = choice.toLowerCase();
    if (choice == "rock"){
        console.log("Player chose rock!!!");
        return result = 0;
    }
    else if (choice == "paper"){
        console.log("Player chose paper!!!")
        return result = 1;
    }
    else if (choice == "scissors"){
        console.log("Player chose scissors!!!")
        return result = 2;
    }
    else{
        console.log("Not a valid choice :(")
        return result = 3;
    }
}

function getComputerChoice(){
    let computerRandom = (Math.floor(Math.random()*3))
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

let humanScore = 0;
let computerScore = 0;


function playRound(result, computerChoice){
    if(result == 0 && computerChoice == 1 || result == 1 && computerChoice == 2 || result == 2 && computerChoice == 0){
        computerScore += 1;
        console.log("Computer won, score +1!!")
    }
    else if (result === computerChoice){
        console.log ("Draw")
    }
    else{
        humanScore += 1;
        console.log("Human won, score +1!!")
    }
}

for(let i = 0; i < 5; i++){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice)
}

console.log("Computer final score: " + computerScore)
console.log("Human final score: " + humanScore)

if(humanScore > computerScore){
    console.log("Human won!!!")
}
else if(computerScore > humanScore){
    console.log("Computer won!!!")
}
else {
    console.log("DRAW!!!")
}
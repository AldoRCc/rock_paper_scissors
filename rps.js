
let computerRandom = (Math.floor(Math.random()*3))
console.log(computerRandom)

function getHumanChoice(){
    let choice = prompt("ROCK, PAPER, SCISSORS. CHOOSE!!!");
    choice = choice.toLowerCase();
    if (choice == "rock"){
        console.log("Player chose rock!!!");
    }
    else if (choice == "paper"){
        console.log("Player chose paper!!!")
    }
    else if (choice == "scissors"){
        console.log("Player chose scissors!!!")
    }
}
getHumanChoice();

function getComputerChoice(){
    if (computerRandom == 0){
    console.log("ROCK");
    }
}
getComputerChoice(computerRandom);
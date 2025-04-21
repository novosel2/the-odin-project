let humanScore = 0;
let computerScore = 0;

while (true){
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  playRound(humanChoice, computerChoice);

  alert(`HUMAN: ${humanScore} | COMPUTER: ${computerScore}`);
}

function playRound(humanChoice, computerChoice) {
  console.log(`HUMAN: ${humanChoice} | COMPUTER: ${computerChoice}`);

  if (humanChoice === "rock" && computerChoice === "scissors") {
    alert("You win! Rock beats Scissors");
    humanScore++;
  }
  else if (humanChoice === "rock" && computerChoice === "paper") {
    alert("You lose! Paper beats Rock");
    computerScore++;
  }
  else if (computerChoice === "rock" && humanChoice === "scissors") {
    alert("You lose! Rock beats Scissors");
    computerScore++;
  }
  else if (computerChoice === "rock" && humanChoice === "paper") {
    alert("You win! Paper beats Rock");
    humanScore++;
  }
  else if (humanChoice === "scissors" && computerChoice === "paper") {
    alert("You win! Scissors beat Paper");
    humanScore++;
  }
  else if (humanChoice === "paper" && computerChoice === "scissors") {
    alert("You lose! Scissors beat Paper");
    computerScore++;
  }
  else {
    alert("It's a TIE!");
  }
}

function getComputerChoice(){
  let num = Math.random();
  if (num * 100 <= 33) {
    return "rock";
  }
  else if (num * 100 > 33 && num * 100 <= 66){
    return "paper";
  }
  else {
    return "scissors";
  }
}

function getHumanChoice(){
  let choice;
  while(choice != "rock" && choice != "paper" && choice != "scissors"){
    choice = prompt("Rock, paper or scissors?").toLowerCase();
  }
  return choice;
}
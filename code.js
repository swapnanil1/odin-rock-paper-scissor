let rounds = prompt("How many rounds you want to play?");

playGame(rounds);
function getComputerChoice() {
  let guess = Math.random();
  if (guess < 0.33) {
    return "rock";
  } else if (guess < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}
function getHumanChoice() {
  let guess = prompt("What is your play?");
  guess = guess.toLowerCase().trim();
  return guess;
}

function playGame(rounds) {
  let computerScore = 0;
  let humanScore = 0;
  // playGame
  for (i = 1; i <= rounds; i++) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }
  console.log(`Your Score ${humanScore}`);
  console.log(`Computer Score ${computerScore}`);
  if (humanScore > computerScore) console.log("You Win");
  else if (computerScore > humanScore) console.log("You Lose");
  else console.log("Tie1");
  // play each round
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("Tie");
    } else if (
      (humanChoice === "rock" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "rock")
    ) {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore = computerScore + 1;
    } else {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore = humanScore + 1;
    }
  }
}

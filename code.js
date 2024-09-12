const rockbtn = document.querySelector("#rock");
const paperbtn = document.querySelector("#paper");
const scissorbtn = document.querySelector("#scissor");

let computerScore = 0;
let humanScore = 0;
let rounds = parseInt(prompt("How many rounds do you want to play?"));

// Ensure rounds is a valid number and greater than 0
if (isNaN(rounds) || rounds <= 0) {
  alert("Please enter a valid number greater than 0.");
  rounds = 0; // Set rounds to 0 to prevent any gameplay if invalid input
}
// vendor
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

function playGame(humanChoice, computerChoice) {
  const container = document.querySelector(".container");
  // Clear previous results
  container.innerHTML = "";

  // DOM
  const status = document.createElement("p");
  if (humanChoice === computerChoice) {
    status.textContent = "Tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    status.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  } else {
    status.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  }
  container.appendChild(status);
}

function displayResults() {
  const compP = document.createElement("p");
  const humanP = document.createElement("p");
  const endGame = document.createElement("p");
  const result = document.querySelector(".results");
  result.textContent = "";
  humanP.textContent = `Your Score: ${humanScore}`;
  compP.textContent = `Computer Score: ${computerScore}`;

  if (humanScore > computerScore) endGame.textContent = "You Win!";
  else if (computerScore > humanScore) endGame.textContent = "You Lose!";
  else endGame.textContent = "Game Ended in a Tie";

  result.appendChild(humanP);
  result.appendChild(compP);
  result.appendChild(endGame);
}
// main
rockbtn.addEventListener("click", () => {
  if (rounds > 0) {
    playGame("rock", getComputerChoice());
    rounds--;
  } else displayResults(humanScore, computerScore);
});

paperbtn.addEventListener("click", () => {
  if (rounds > 0) {
    playGame("paper", getComputerChoice());
    rounds--;
  } else displayResults(humanScore, computerScore);
});

scissorbtn.addEventListener("click", () => {
  if (rounds > 0) {
    playGame("scissors", getComputerChoice());
    rounds--;
  } else displayResults(humanScore, computerScore);
});

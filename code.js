// DOM Elements
const rockbtn = document.querySelector("#rock");
const paperbtn = document.querySelector("#paper");
const scissorbtn = document.querySelector("#scissor");
const resultsContainer = document.querySelector(".results");
const resultsTable = document.querySelector("#resultsTable tbody");

// Game Variables
let computerScore = 0;
let humanScore = 0;
let rounds = parseInt(prompt("How many rounds do you want to play?"));

// Validate rounds input
if (isNaN(rounds) || rounds <= 0) {
  alert("Please enter a valid number greater than 0.");
  rounds = 0; // Prevent gameplay if invalid input
}

// Get computer's choice
function getComputerChoice() {
  const randomValue = Math.random();
  if (randomValue < 0.33) {
    return "rock";
  } else if (randomValue < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Play a round of the game
function playGame(humanChoice, computerChoice) {
  // Clear previous results
  resultsContainer.innerHTML = "";

  // Determine the result
  const status = document.createElement("p");
  let result;
  if (humanChoice === computerChoice) {
    status.textContent = "Tie";
    result = "Tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    status.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
    result = "Lose";
  } else {
    status.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
    result = "Win";
  }
  resultsContainer.appendChild(status);

  // Update the table with the current round results
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${rounds}</td>
    <td>${humanChoice}</td>
    <td>${computerChoice}</td>
    <td>${result}</td>
    <td>${humanScore}</td>
    <td>${computerScore}</td>
  `;
  resultsTable.appendChild(newRow);
}

// Display final results
function displayResults(humanScore, computerScore) {
  alert(
    `Game Over! Final Scores - You: ${humanScore}, Computer: ${computerScore}`
  );
}

// Event Listeners for buttons
rockbtn.addEventListener("click", () => {
  if (rounds > 0) {
    playGame("rock", getComputerChoice());
    rounds--;
  } else {
    displayResults(humanScore, computerScore);
  }
});

paperbtn.addEventListener("click", () => {
  if (rounds > 0) {
    playGame("paper", getComputerChoice());
    rounds--;
  } else {
    displayResults(humanScore, computerScore);
  }
});

scissorbtn.addEventListener("click", () => {
  if (rounds > 0) {
    playGame("scissors", getComputerChoice());
    rounds--;
  } else {
    displayResults(humanScore, computerScore);
  }
});

const choices = ["rock", "paper", "scissors"];
const winners = [];
let round = 0;
let playerScore = 0;
let compScore = 0;
let draws = 0;
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const outcomeDiv = document.querySelector(".outcome");
const playerScoreSpan = document.querySelector(".player-score");
const compScoreSpan = document.querySelector(".computer-score");

// function game() {
//   // for (let i = 1; i <= 5; i++) playRound(i);
//   //   playRound();
//   document.querySelector("button").textContent = "Play new game";
//   logWins();
// }

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
  let input = prompt("Type Rock, Paper, or Scissors");
  while (input == null) {
    input = prompt("Type Rock, Paper, or Scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt("Invalid value, Type Rock, Paper or Scissors");
    while (input == null) {
      input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
  // var playerSelection;
  // rockButton.addEventListener("click", () => {
  //   playerSelection = "rock";
  // });
  // paperButton.addEventListener("click", () => {
  //   playerSelection = "paper";
  // });
  // scissorsButton.addEventListener("click", () => {
  //   playerSelection = "scissors";
  // });
  // return playerSelection;
}

// function playRound(round) {
//   const winner = checkWinner(playerSelection, computerSelection);
//   winners.push(winner);
//   logRound(playerSelection, computerSelection, winner, round);
// }

function score(playerScore, compScore) {
  playerScoreSpan.innerText = `Player Score : ${playerScore}  `;
  compScoreSpan.innerText = `Computer Score : ${compScore}`;
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    draws++;
    round++;
    const p = document.createElement("p");
    p.innerText = `It's a Draw! You both picked ${playerSelection}`;
    outcomeDiv.appendChild(p);
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    round++;
    const p = document.createElement("p");
    p.innerText = "You Win! Rock crushes Scissors";
    outcomeDiv.appendChild(p);
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    round++;
    const p = document.createElement("p");
    p.innerText = "You Win! Paper wraps Rock";
    outcomeDiv.appendChild(p);
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    round++;
    const p = document.createElement("p");
    p.innerText = "You Win! Scissors cut Paper";
    outcomeDiv.appendChild(p);
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    compScore++;
    round++;
    const p = document.createElement("p");
    p.innerText = "You Lose! Paper wraps Rock";
    outcomeDiv.appendChild(p);
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    compScore++;
    round++;
    const p = document.createElement("p");
    p.innerText = "You Lose! Scissors cuts Paper";
    outcomeDiv.appendChild(p);
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    compScore++;
    round++;
    const p = document.createElement("p");
    p.innerText = "You Lose! Rock crushes Scissors";
    outcomeDiv.appendChild(p);
  }

  const h2 = document.createElement("h2");
  if (playerScore == 5) {
    playerScore = 0;
    compScore = 0;
    h2.innerText = "Player Wins! ";
    outcomeDiv.append(h2);
  } else if (compScore == 5) {
    compScore = 0;
    h2.innerText = "Computer Wins! ";
    outcomeDiv.append(h2);
  }
}

rockButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "rock";
  score(playerScore, compScore);
  checkWinner(playerSelection, computerSelection);
});

paperButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "paper";
  score(playerScore, compScore);
  checkWinner(playerSelection, computerSelection);
});

scissorsButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "scissors";
  score(playerScore, compScore);
  checkWinner(playerSelection, computerSelection);
});

// function logRound(playerSelection, computerSelection) {
//   console.log("Player Chose: ", playerSelection);
//   console.log("Computer Chose: ", computerSelection);
//   console.log(playerSelection, " vs ", computerSelection);
//   console.log(checkWinner(playerSelection, computerSelection));
//   console.log("----------------------------------");
// }

function logWins() {
  const h2 = document.createElement("h2");
  h2.innerText = "Results: ";
  outcomeDiv.append(h2);
  const h3 = document.createElement("h3");
  h3.innerText = console.log("Player Wins: ", playerScore);

  // console.log("Computer Wins: ", compScore);
  // console.log("Draws:", draws);
  // console.log("----------------------------------");
  // finalWinner();
}

// function finalWinner() {
//   if (playerScore > compScore) console.log("Player Won the match");
//   else if (playerScore == compScore) console.log("It's a Draw");
//   else console.log("Player lost the match");
// }

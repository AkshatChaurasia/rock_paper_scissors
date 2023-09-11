const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
  for (let i = 1; i <= 5; i++) playRound(i);
  document.querySelector("button").textContent = "Play new game";
  logWins();
}

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
}

function playRound(round) {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
}

function validateInput(choice) {
  return choices.includes(choice);
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) return "Draw";
  else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  )
    return "Player";
  else return "Computer";
}

function logRound(playerSelection, computerSelection, winner, round) {
  console.log("Round:", round);
  console.log("Player Chose: ", playerSelection);
  console.log("Computer Chose: ", computerSelection);
  console.log(playerSelection, " vs ", computerSelection);
  if (winner == "Draw") console.log("Draw");
  else console.log(winner, " won the round");
  console.log("----------------------------------");
}

function logWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let draw = winners.filter((item) => item == "Draw").length;
  console.log("Results:");
  console.log("Player Wins: ", playerWins);
  console.log("Computer Wins: ", computerWins);
  console.log("Draws:", draw);
  finalWinner();
}

function finalWinner() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  if (playerWins > computerWins) console.log("Player Won the match");
  else if (playerWins == computerWins) console.log("It's a Draw");
  else console.log("Player lost the match");
}

// this is the code for the game function
var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("userScore");
const compScore_span = document.getElementById("compScore");
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

main();
getCompChoice();

function game(userChoice) {
  const computerChoice = getCompChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;
    default:
      draw();
  }
}

function getCompChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function main() {
  rock_div.addEventListener("click", function() {
    game("rock");
  });

  paper_div.addEventListener("click", function() {
    game("paper");
  });

  scissors_div.addEventListener("click", function() {
    game("scissors");
  });
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${capitalize(userChoice)} beats ${capitalize(
    computerChoice
  )}! YOU WIN!`;
}

function lose(userChoice, computerChoice) {
  compScore++;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${capitalize(userChoice)} loses to ${capitalize(
    computerChoice
  )}! YOU LOSE!`;
}

function draw() {
  result_p.innerHTML = "It's a draw...";
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

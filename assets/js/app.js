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
      draw(userChoice, computerChoice);
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
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove("green-glow");
  }, 300);
}

function lose(userChoice, computerChoice) {
  compScore++;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${capitalize(userChoice)} loses to ${capitalize(
    computerChoice
  )}! YOU LOSE!`;
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove("red-glow");
  }, 300);
}

function draw(userChoice, computerChoice) {
  result_p.innerHTML = "It's a draw...";
  document.getElementById(userChoice).classList.add("gray-glow");
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove("gray-glow");
  }, 300);
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

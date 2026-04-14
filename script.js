const result = document.querySelector("#result");
const scoreDisplay = document.querySelector("#score");
const winnerDisplay = document.querySelector("#winner");
const buttons = document.querySelectorAll("button");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  }
  return "scissor";
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    return {
      message: `It's a draw! You both chose ${humanChoice}.`,
      winner: "draw",
    };
  }

  if (humanChoice === "rock") {
    return computerChoice === "scissor"
      ? { message: "You win! Rock beats scissor.", winner: "human" }
      : { message: "You lose! Paper beats rock.", winner: "computer" };
  }

  if (humanChoice === "paper") {
    return computerChoice === "rock"
      ? { message: "You win! Paper beats rock.", winner: "human" }
      : { message: "You lose! Scissor beats paper.", winner: "computer" };
  }

  if (humanChoice === "scissor") {
    return computerChoice === "paper"
      ? { message: "You win! Scissor beats paper.", winner: "human" }
      : { message: "You lose! Rock beats scissor.", winner: "computer" };
  }

  return { message: "Invalid input.", winner: "invalid" };
}

function updateScoreBoard() {
  scoreDisplay.textContent = `Score — You: ${humanScore} | Computer: ${computerScore}`;
}

function endGame() {
  const finalMessage =
    humanScore === 5
      ? "You reached 5 points! You win the game!"
      : "Computer reached 5 points! Computer wins the game!";

  winnerDisplay.textContent = finalMessage;
  buttons.forEach((button) => (button.disabled = true));
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (humanScore === 5 || computerScore === 5) {
      return;
    }

    const humanSelection = button.textContent.toLowerCase();
    const computerSelection = getComputerChoice();
    const roundResult = playRound(humanSelection, computerSelection);

    if (roundResult.winner === "human") {
      humanScore += 1;
    } else if (roundResult.winner === "computer") {
      computerScore += 1;
    }

    console.log(`Player: ${humanSelection}, Computer: ${computerSelection}`);
    console.log(roundResult.message);
    result.textContent = roundResult.message;
    updateScoreBoard();

    if (humanScore === 5 || computerScore === 5) {
      endGame();
    }
  });
});

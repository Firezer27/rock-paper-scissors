const result = document.querySelector("#result");
const buttons = document.querySelectorAll("button");

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
    return `It's a draw! You both chose ${humanChoice}.`;
  }

  if (humanChoice === "rock") {
    return computerChoice === "scissor"
      ? "You win! Rock beats scissor."
      : "You lose! Paper beats rock.";
  }

  if (humanChoice === "paper") {
    return computerChoice === "rock"
      ? "You win! Paper beats rock."
      : "You lose! Scissor beats paper.";
  }

  if (humanChoice === "scissor") {
    return computerChoice === "paper"
      ? "You win! Scissor beats paper."
      : "You lose! Rock beats scissor.";
  }

  return "Invalid input.";
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanSelection = button.textContent.toLowerCase();
    const computerSelection = getComputerChoice();
    const roundResult = playRound(humanSelection, computerSelection);

    console.log(`Player: ${humanSelection}, Computer: ${computerSelection}`);
    console.log(roundResult);
    result.textContent = roundResult;
  });
});

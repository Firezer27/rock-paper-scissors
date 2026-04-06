function getComputerChoice() {
  const randomNumber = Math.round(Math.random() * 100) / 100;
  console.log(randomNumber);

  if (randomNumber >= 0 && randomNumber <= 0.33) {
    console.log("rock");
  } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
    console.log("paper");
  } else {
    console.log("scissor");
  }
}
getComputerChoice();

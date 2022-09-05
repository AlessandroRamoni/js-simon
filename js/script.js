console.log("Lunedì");

let firstNumber = 0;
let secondNumber = 0;
let thirdNumber = 0;
let fourthNumber = 0;
let fifthNumber = 0;
boxNumber = document.getElementById("box");

window.addEventListener("load", function () {
  firstNumber = getRandomNumber(1, 5);
  secondNumber = getRandomNumber(1, 5);
  thirdNumber = getRandomNumber(1, 5);
  fourthNumber = getRandomNumber(1, 5);
  fifthNumber = getRandomNumber(1, 5);

  boxNumber.innerHTML = `${firstNumber}, ${secondNumber}, ${thirdNumber}, ${fourthNumber}, ${fifthNumber}`;
});

function getRandomNumber(min, max) {
  let range = max - min + 1;
  let random = Math.floor(Math.random() * range) + min;
  return random;
}

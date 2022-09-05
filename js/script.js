console.log("Lunedì");
/*
let firstNumber = 0;
let secondNumber = 0;
let thirdNumber = 0;
let fourthNumber = 0;
let fifthNumber = 0;
let boxNumber = document.getElementById("box");
let ticking = document.getElementById("ticking");

window.addEventListener("load", function () {
  firstNumber = getRandomNumber(1, 5);
  secondNumber = getRandomNumber(1, 5);
  thirdNumber = getRandomNumber(1, 5);
  fourthNumber = getRandomNumber(1, 5);
  fifthNumber = getRandomNumber(1, 5);

  boxNumber.innerHTML = `${firstNumber}, ${secondNumber}, ${thirdNumber}, ${fourthNumber}, ${fifthNumber}`;

  let countdown = 10;

  const intervalId = setInterval(function () {
    if (countdown > 0) {
      console.log(countdown);
      ticking.innerHTML = countdown;
    } else {
      console.log("prova");
      clearInterval(intervalId);
      boxNumber.style.display = "none";

    }
    countdown--;
  }, 1000);
});
*/

let boxNumber = document.getElementById("box");
let ticking = document.getElementById("ticking");
let numbers = [];

window.addEventListener("load", function () {
  const numbers = [];

  for (i = 0; i < 5; i++) {
    let randomNumber = getRandomNumber(1, 5);
    numbers.push(randomNumber);
    // console.log(randomNumber);
  }
  //   console.log(numbers);
  boxNumber.innerHTML = numbers;
  let countdown = 10;

  const intervalId = setInterval(function () {
    if (countdown > 0) {
      //   console.log(countdown);
      ticking.innerHTML = countdown;
    } else {
      //   console.log("fine countdown");
      clearInterval(intervalId);
      boxNumber.style.display = "none";
    }
    countdown--;
  }, 1000);
});

///////////////////// FUNZIONI ///////////////////////////

function getRandomNumber(min, max) {
  let range = max - min + 1;
  let random = Math.floor(Math.random() * range) + min;
  return random;
}
/*
function checkValueInArray(array, value) {
  // dobbiamo ciclare l'array
  for (let i = 0; i < array.length; i++) {
    // controllare che l'elemento iesimo dell'array sia uguale o meno a value
    if (array[i] === value) {
      console.log(value + " è presente nell'array");
      return true;
    }
  }
  console.log(value + " NON è presente nell'array");
  return false;
}
*/

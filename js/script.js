console.log("Lunedì");

let boxNumber = document.getElementById("box");
let ticking = document.getElementById("ticking");
let numbers = [];
let tentativi = [];

let firstNumber = 0;
let secondNumber = 0;
let thirdNumber = 0;
let fourthNumber = 0;
let fifthNumber = 0;

window.addEventListener("load", function () {
  firstNumber = getRandomNumber(1, 5);
  secondNumber = getRandomNumber(1, 5);
  thirdNumber = getRandomNumber(1, 5);
  fourthNumber = getRandomNumber(1, 5);
  fifthNumber = getRandomNumber(1, 5);

  boxNumber.innerHTML = `${firstNumber}, ${secondNumber}, ${thirdNumber}, ${fourthNumber}, ${fifthNumber}`;

  numbers.push(
    firstNumber,
    secondNumber,
    thirdNumber,
    fourthNumber,
    fifthNumber
  );
  console.log(numbers);

  let countdown = 5;

  const intervalId = setInterval(function () {
    if (countdown > 0) {
      console.log(countdown);
      ticking.innerHTML = countdown;
    } else {
      console.log("prova");
      clearInterval(intervalId);
      boxNumber.style.display = "none";
      ticking.style.display = "none";
    }
    countdown--;
  }, 1000);
});

/*
let boxNumber = document.getElementById("box");
let ticking = document.getElementById("ticking");
let numbers = [];
let tentativi = [];

window.addEventListener("load", function () {
  const numbers = [];

  for (i = 0; i < 5; i++) {
    let randomNumber = getRandomNumber(1, 5);
    numbers.push(randomNumber);
    // console.log(randomNumber);
  }
  console.log(numbers);
  boxNumber.innerHTML = numbers;
  let countdown = 5;

  const intervalId = setInterval(function () {
    countdown--;
    if (countdown > 0) {
      //   console.log(countdown);
      ticking.innerHTML = countdown;
    } else {
      //   console.log("fine countdown");
      clearInterval(intervalId);
      boxNumber.style.display = "none";
      ticking.style.display = "none";
    }
  }, 1000);

  /////////// SPOSTARE QUESTO BLOCCO IN UNA FUNZIONE FUORI?

  let results = [];

  for (let i = 0; i < numbers.length; i++) {
    let singleNumber = numbers[i];
    console.log(singleNumber);

    if (!tentativi.includes(singleNumber)) {
      console.log("Bravo");
      results.push(singleNumber);
      console.log(results);
    } else {
      console.log("Negativo");
    }
  }
});
*/
setTimeout(function () {
  for (i = 0; i < 5; i++) {
    let numeriInseriti = parseInt(
      prompt("Prova ad inserire i numeri di prima!")
    );
    tentativi.push(numeriInseriti);
  }
  console.log(tentativi);
}, 7000);

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

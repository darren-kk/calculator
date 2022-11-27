const num1Element = document.querySelector("#num1");
const num2Element = document.querySelector("#num2");
const num3Element = document.querySelector("#num3");
const num4Element = document.querySelector("#num4");
const num5Element = document.querySelector("#num5");
const num6Element = document.querySelector("#num6");
const num7Element = document.querySelector("#num7");
const num8Element = document.querySelector("#num8");
const num9Element = document.querySelector("#num9");
const num0Element = document.querySelector("#num0");
const numdotElement = document.querySelector("#numdot");
const numCElement = document.querySelector("#numc");
const inputElement = document.querySelector(".input_blank");
const numsElement = document.querySelectorAll(".num");
const addElement = document.querySelector('.add');
const minusElement = document.querySelector('.minus');
const multiElement = document.querySelector('.multi');
const divideElement = document.querySelector('.divide');
const equalElement = document.querySelector('.equal');

let numClickResult1 = "";
let numClickResult2 = "";
let symbols = undefined;

const numClick = function(event) {
  if (symbols === undefined) {
    numClickResult1 += event.target.textContent;
    inputElement.value = numClickResult1;  
    return numClickResult1;
  }

  if (symbols !== undefined) {
    numClickResult2 += event.target.textContent;
    inputElement.value = numClickResult2;  
    return numClickResult2;
  }

  if (numClickResult1.includes('.')) {
    numdotElement.removeEventListener('click', numClick);
  }
}

const clearHandler = function() {
  inputElement.value = "";
  numClickResult1 = "";
  numClickResult2 = "";
  symbols = undefined;
}

const calculateHandler = function(event) {
  if (event.target) {
    symbols = event.target.textContent;
  }

  return symbols;
}

const equalHandler = function() {
  let result = 0

  if (symbols === undefined) {
    inputElement.value = Number(numClickResult1);
  }

  switch (symbols) {
    case '+':
    result = Number(numClickResult1) + Number(numClickResult2);
    numClickResult1 = result;
    numClickResult2 = "";
    symbols = undefined;
    break;
    case '-':
    result = Number(numClickResult1) - Number(numClickResult2);
    numClickResult1 = result;
    numClickResult2 = "";
    symbols = undefined;
    break;
    case 'x':
    result = Number(numClickResult1) * Number(numClickResult2);
    numClickResult1 = result;
    numClickResult2 = "";
    symbols = undefined;
    break;
    case '%':
    result = Number(numClickResult1) / Number(numClickResult2);
    numClickResult1 = result;
    numClickResult2 = "";
    symbols = undefined;
    break;
  }
  
  inputElement.value = result;
}

num1Element.addEventListener('click', numClick);
num2Element.addEventListener('click', numClick);
num3Element.addEventListener('click', numClick);
num4Element.addEventListener('click', numClick);
num5Element.addEventListener('click', numClick);
num6Element.addEventListener('click', numClick);
num7Element.addEventListener('click', numClick);
num8Element.addEventListener('click', numClick);
num9Element.addEventListener('click', numClick);
num0Element.addEventListener('click', numClick);
numdotElement.addEventListener('click', numClick);
numCElement.addEventListener('click', clearHandler);

addElement.addEventListener('click', calculateHandler);
minusElement.addEventListener('click', calculateHandler);
multiElement.addEventListener('click', calculateHandler);
divideElement.addEventListener('click', calculateHandler);

equalElement.addEventListener('click', equalHandler);
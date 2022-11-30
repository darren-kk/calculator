const numElementsList = document.querySelectorAll(".nums");
const numdotElement = document.querySelector(".numdot");
const numCElement = document.querySelector(".numc");
const inputElement = document.querySelector(".input_blank");
const sybolElementList = document.querySelectorAll(".symbols_btn");
const equalElement = document.querySelector(".equal");

let numClickResult1 = "";
let numClickResult2 = "";
let symbols = undefined;

const numClick = function(event) {
  if (symbols === undefined) {
    if (numClickResult1.includes(".")) {
      numdotElement.removeEventListener('click', numClick);
    } 
    
    numClickResult1 += event.target.textContent;
    inputElement.value = numClickResult1;
    
    return numClickResult1;
  }
  
  if (symbols !== undefined) {
    numdotElement.addEventListener("click", numClick);

    numClickResult2 += event.target.textContent;
    inputElement.value = numClickResult2;  
    
    if (numClickResult2.includes('.')) {
      numdotElement.removeEventListener('click', numClick);
    }

    return numClickResult2;
  }
}

const clearHandler = function() {
  numdotElement.addEventListener("click", numClick);
  inputElement.value = 0;
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
  let result = 0;

  if (symbols === undefined) {
    inputElement.value = Number(numClickResult1.toFixed(8));
  }

  switch (symbols) {
    case '+':
      result = (Number(numClickResult1) + Number(numClickResult2)).toFixed(8);
      numClickResult1 = result
      numClickResult2 = "";
      symbols = undefined;
      inputElement.value = Number(result);
    break;
    case '-':
      result = (Number(numClickResult1) - Number(numClickResult2)).toFixed(8);
      numClickResult1 = result;
      numClickResult2 = "";
      symbols = undefined;
      inputElement.value = Number(result);
    break;
    case 'x':
      result = (Number(numClickResult1) * Number(numClickResult2)).toFixed(8);
      numClickResult1 = result;
      numClickResult2 = "";
      symbols = undefined;
      inputElement.value = Number(result);
    break;
    case '%':
      result = (Number(numClickResult1) / Number(numClickResult2)).toFixed(8);
      numClickResult1 = result;
      numClickResult2 = "";
      symbols = undefined;
      inputElement.value = Number(result);
    break;
  }
}

numElementsList.forEach(element => {
  element.addEventListener("click", numClick);
});

sybolElementList.forEach(element => {
  element.addEventListener("click", calculateHandler);
});

numdotElement.addEventListener("click", numClick);
numCElement.addEventListener('click', clearHandler);
equalElement.addEventListener('click', equalHandler);
const num1Element = document.querySelector("#num1")
const num2Element = document.querySelector("#num2")
const num3Element = document.querySelector("#num3")
const num4Element = document.querySelector("#num4")
const num5Element = document.querySelector("#num5")
const num6Element = document.querySelector("#num6")
const num7Element = document.querySelector("#num7")
const num8Element = document.querySelector("#num8")
const num9Element = document.querySelector("#num9")
const num0Element = document.querySelector("#num0")
const numdotElement = document.querySelector("#numdot")
const numCElement = document.querySelector("#numc")
const inputElement = document.querySelector(".input_blank")
const numsElement = document.querySelectorAll(".num")
const addElement = document.querySelector('#add')
let numClickResult1 = "";

const numClick = function(event) {
  numClickResult1 += event.target.textContent;
  console.log(numClickResult1);
  inputElement.value = numClickResult1;

  if(numClickResult1.includes('.')) {
    numdotElement.removeEventListener('click', numClick);
  }
  
  return numClickResult1;
}

const clearHandler = function() {
  inputElement.value = "";
  numClickResult1 = "";
}

num1Element.addEventListener('click', numClick)
num2Element.addEventListener('click', numClick)
num3Element.addEventListener('click', numClick)
num4Element.addEventListener('click', numClick)
num5Element.addEventListener('click', numClick)
num6Element.addEventListener('click', numClick)
num7Element.addEventListener('click', numClick)
num8Element.addEventListener('click', numClick)
num9Element.addEventListener('click', numClick)
num0Element.addEventListener('click', numClick)
numdotElement.addEventListener('click', numClick)
numCElement.addEventListener('click', clearHandler)



/* 
function add(result1, result2) {
  let addre = result1 + result2
  return add
}



*/
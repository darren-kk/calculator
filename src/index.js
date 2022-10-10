const numbers = document.querySelectorAll(".num")
const blank = document.querySelector(".blank")

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', numClick);
  }

  function numClick(event) {
    blank.textContent = `${event.target.textContent}`;
  }

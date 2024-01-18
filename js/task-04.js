function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputNumber = document.querySelector("input")
const createBtn = document.querySelector('[data-create]')
const destroyBtn = document.querySelector('[data-destroy]')
const boxes = document.querySelector('#boxes')

function createBoxes(amount) {
  const baseBox = 30;
  boxes.innerHTML = "";
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.background = getRandomHexColor();
    box.style.width = (baseBox + i * 10 + "px");
    box.style.height = (baseBox + i * 10 + "px");
    boxes.appendChild(box)
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  const amount = parseInt(inputNumber.value, 10);
  if (amount !== NaN && amount < 101) {
    createBoxes(amount)
  } else {
    alert("Invalid number!! Please enter your number between 1 and 100")
  }
  
})


destroyBtn.addEventListener("click", destroyBoxes)

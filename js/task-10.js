function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const input = document.querySelector('[type="number"]');
const boxes = document.getElementById("boxes");

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    boxes.insertAdjacentElement("beforeEnd", div);
  }
  return boxes;
}

createBtn.addEventListener("click", (e) => {
  if (input.value <= parseInt(input.max)) {
    createBoxes(input.value);
    let width = 20;
    let heigth = 20;
    for (let box of boxes.children) {
      box.setAttribute(
        "style",
        `background-color: ${getRandomHexColor()}; width: ${(width += 10)}px; height: ${(heigth += 10)}px`
      );
    }
  }
});

function destroyBoxes() {
  boxes.innerHTML = "";
}

destroyBtn.addEventListener("click", (e) => {
  destroyBoxes();
});
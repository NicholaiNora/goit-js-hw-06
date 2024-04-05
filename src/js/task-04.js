let subBtn = document.querySelector('button[data-action="decrement"]');
let addBtn = document.querySelector('button[data-action="increment"]');
let value = document.getElementById("value");

let counterValue = 0;

subBtn.addEventListener("click", () => {
  counterValue--;
  value.innerText = counterValue;
});

addBtn.addEventListener("click", () => {
  counterValue++;
  value.innerText = counterValue;
});
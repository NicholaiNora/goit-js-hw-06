const input = document.getElementById("font-size-control");
const text = document.getElementById("text");
const value = document.getElementById("value");

value.textContent = input.value;
input.addEventListener("input", (e) => {
  value.textContent = e.target.value;
  text.style.fontSize = `${e.currentTarget.value}px`;
});

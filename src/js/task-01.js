const categories = document.getElementById("categories");
const items = document.getElementsByClassName("item");

console.log(`Number of categories: ${categories.children.length}`);
console.log("");
for (let item of items) {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(
    `Elements: ${item.firstElementChild.nextElementSibling.children.length}`
  );
  console.log("");
}

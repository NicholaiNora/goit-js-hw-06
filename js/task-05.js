const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", (e) => {
    if (e.target.value === "") {
     output.textContent = "Anonymous";
    } else {     
     output.textContent = e.target.value;
    }
});

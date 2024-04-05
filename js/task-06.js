const input = document.getElementById("validation-input");
const message = document.getElementById("message");

input.addEventListener("blur", (e) => {
  if (e.currentTarget.value !== "") {
    if (e.currentTarget.value.length < input.dataset.length) {
      input.classList.add("invalid");
      input.classList.remove("valid");
    //   message.textContent = "Input is Invalid";
    } else {
      input.classList.add("valid");
      input.classList.remove("invalid");
    //   message.textContent = "Input is Valid";
    }
  } else {
    input.classList.remove("invalid");
    input.classList.remove("valid");
    // message.textContent = "Please enter 6 symbols";
  }
});

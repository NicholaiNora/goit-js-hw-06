const form = document.querySelector("form.login-form");
const email = document.querySelector('[name="email"]');
const password = document.querySelector('[name="password"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let errorAlert = 0;
  const form = e.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email === "" || password === "") {
    alert("All fields must be filled in.");
    errorAlert++;
  }
  if (password !== "" && password.length < 7) {
    alert("Password must be atleast 7 character ");
    errorAlert++;
  }

  if (errorAlert === 0) {
    let user = {};
    user.email = email;
    user.password = password;
    console.log(user);
    form.reset();
  }
});

const button = document.querySelector("#startButton");
const nameField = document.querySelector("#name");
const passwordField = document.querySelector("#password");

button.addEventListener("click", logIn);
function logIn() {
  if (nameField.value !== "") {
    if (passwordField.value !== "") {
      window.location.href = "./home/home.html";
      localStorage.setItem("username",nameField.value)

    } else {
      alert("please enter your password");
    }
  } else {
    alert("please enter your username");
  }
}

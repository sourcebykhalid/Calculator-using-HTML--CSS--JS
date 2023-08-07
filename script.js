// Calculator using Javascript
let string = "";
const buttons = document.querySelectorAll(".button");
const input = document.querySelector(".input");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = "0";
    } else if (e.target.innerHTML == ".") {
      if (!string.includes(".")) {
        string = string + e.target.innerHTML;
        input.value = string;
      } else {
        alert("You can only enter one decimal point");
      }
    } else if (e.target.innerHTML == "Del") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string = string + e.target.innerHTML;
      input.value = string;
    }
  });
});

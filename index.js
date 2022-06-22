let btn = document.querySelector(".btn");
let display = document.querySelector("#display");
btn.onclick = function () {
  display(btn.value);
};

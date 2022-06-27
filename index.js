setInterval(setClock, 1000);

let seconds = document.querySelector(".seconds");
let minutes = document.querySelector(".minutes");
let hours = document.querySelector(".hours");

function setClock() {
  let currentDate = new Date();
  let secondsratio = currentDate.getSeconds() / 60;
  let minutesratio = (secondsratio + currentDate.getMinutes()) / 60;
  let hoursratio = (minutesratio + currentDate.getHours()) / 12;

  setRotation(seconds, secondsratio);

  setRotation(minutes, minutesratio);

  setRotation(hours, hoursratio);
}

function setRotation(element, rotationratio) {
  element.style.setProperty("--rotation", rotationratio * 360);
}
setClock();

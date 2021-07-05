var tenMS = document.querySelector("#msTens");
var hunMS = document.querySelector("#msHundreds");
var oneS = document.querySelector("#secondOnes");
var tenS = document.querySelector("#secondTens");
const digits = document.querySelectorAll(".digit");
const startBtn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");

tenMS.textContent = 0;
hunMS.textContent = 0;
oneS.textContent = 0;
tenS.textContent = 0;

var intervalId = null;
var masterCount = 0;
function startTime() {
  digits.forEach(cv => {
    cv.style.color = "black";
  });
  startBtn.style.visibility = "hidden";
  ++masterCount;
  var mctens = masterCount % 10;
  if (masterCount < 9) {
    tenMS.textContent = masterCount;
  } else {
    tenMS.textContent = mctens;
  }
  var mcHuns = Math.floor(masterCount / 10);
  if (mcHuns > 9) {
    hunMS.textContent = mcHuns % 10;
  } else {
    hunMS.textContent = mcHuns;
  }
  var mcSecs = Math.floor(masterCount / 100);
  if (mcSecs > 9) {
    oneS.textContent = mcSecs % 10;
  } else {
    oneS.textContent = mcSecs;
  }
  var mcTenSec = Math.floor(masterCount / 1000);
  tenS.textContent = mctensec;
  if (mcTenSec == 1) {
    clearInterval(intervalId);
    digits.forEach(cv => {
      cv.style.color = "red";
    });
    startBtn.style.visibility = "visible";
  }
}
startBtn.addEventListener("click", () => {
  intervalId = window.setInterval(startTime, 10);
});

resetBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  masterCount = 0;
  tenMS.textContent = 0;
  hunMS.textContent = 0;
  oneS.textContent = 0;
  tenS.textContent = 0;
  digits.forEach(cv => {
    cv.style.color = "black";
  });
  startBtn.style.visibility = "visible";
});

























// function timer() {
//     setInterval(myTimed1, 3000)
//     setInterval(myTimed2, 5000)
//     setInterval(myTimed3, 7000)
// }

// function myTimed1() {
//     document.getElementById('demo').textContent = "3 seconds";
// }
// function myTimed2() {
//     document.getElementById('demo').textContent = "5 seconds";
// }
// function myTimed3() {
//     document.getElementById('demo').textContent = "7 seconds";
// }

// let  myTime = setInterval(myTimer, 1000);

// function myTimer() {
//   var d = new Date();
//   var t = d.toLocaleTimeString();
//   document.getElementById("demo").innerHTML = t;
// }

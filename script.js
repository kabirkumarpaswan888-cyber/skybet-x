let balance = 1000;
let multiplier = 1;
let interval;
let isRunning = false;
let currentBet = 0;

let canvas, ctx;
let x = 0;
let y = 200;

window.onload = function(){
  canvas = document.getElementById("graph");
  if(canvas){
    ctx = canvas.getContext("2d");
  }
};

function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if(user && pass){
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("app").style.display = "block";
  } else {
    alert("Enter details!");
  }
}

function openGame(){
  document.getElementById("game").style.display = "block";
}

function startGame() {
  let bet = parseInt(document.getElementById("betAmount").value);

  if (!bet || bet <= 0 || bet > balance) {
    alert("Invalid Bet!");
    return;
  }

  currentBet = bet;
  balance -= bet;
  document.getElementById("balance").innerText = balance;

  multiplier = 1;
  isRunning = true;

  x = 0;
  y = 200;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(x, y);

  interval = setInterval(() => {
    multiplier += 0.05;

    x += 5;
    y -= multiplier;

    ctx.lineTo(x, y);
    ctx.strokeStyle = "lime";
    ctx.stroke();

    document.getElementById("multiplier").innerText = multiplier.toFixed(2) + "x";

    generatePlayers();

    if (Math.random() < 0.03) {
      clearInterval(interval);
      isRunning = false;
      alert("💥 Crashed at " + multiplier.toFixed(2) + "x");
    }

  }, 100);
}

function cashOut() {
  if (!isRunning) return;

  clearInterval(interval);
  isRunning = false;

  let win = Math.floor(currentBet * multiplier);
  balance += win;

  document.getElementById("balance").innerText = balance;

  alert("✅ You won ₹" + win);
}

function generatePlayers() {
  let names = ["Ravi","Amit","Rahul","King","Pro","Lucky","Boss"];
  let html = "";

  for(let i=0;i<5;i++){
    let name = names[Math.floor(Math.random()*names.length)];
    let amount = Math.floor(Math.random()*500);

    html += `<div>${name} cashed out ₹${amount}</div>`;
  }

  document.getElementById("players").innerHTML = html;
    }

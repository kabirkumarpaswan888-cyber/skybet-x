let balance = 1000;
let multiplier = 1;
let interval;
let isRunning = false;

function startGame() {
  let bet = parseInt(document.getElementById("betAmount").value);

  if (!bet || bet <= 0 || bet > balance) {
    alert("Invalid Bet!");
    return;
  }

  balance -= bet;
  document.getElementById("balance").innerText = balance;

  multiplier = 1;
  isRunning = true;

  interval = setInterval(() => {
    multiplier += 0.1;
    document.getElementById("multiplier").innerText = multiplier.toFixed(2) + "x";

    if (Math.random() < 0.05) {
      clearInterval(interval);
      isRunning = false;
      alert("Game Over ❌");
    }
  }, 200);
}

function cashOut() {
  if (!isRunning) return;

  clearInterval(interval);
  isRunning = false;

  let win = Math.floor(multiplier * 100);
  balance += win;

  document.getElementById("balance").innerText = balance;

  alert("You won ₹" + win + " 💰");
}

function addMoney() {
  balance += 500;
  document.getElementById("balance").innerText = balance;
}

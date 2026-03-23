let balance = 1000;
let multiplier = 1.0;
let gameRunning = false;
let interval;

function startGame() {
    let bet = parseInt(document.getElementById("betAmount").value);

    if (gameRunning) return;
    if (!bet || bet > balance) {
        alert("Invalid bet");
        return;
    }

    balance -= bet;
    document.getElementById("balance").innerText = balance;

    multiplier = 1.0;
    gameRunning = true;

    interval = setInterval(() => {
        multiplier += 0.1;
        document.getElementById("multiplier").innerText = multiplier.toFixed(2) + "x";

        // random crash
        if (Math.random() < 0.05) {
            clearInterval(interval);
            gameRunning = false;
            alert("Crashed! You lost");
        }
    }, 200);
}

function cashOut() {
    if (!gameRunning) return;

    clearInterval(interval);
    gameRunning = false;

    let bet = parseInt(document.getElementById("betAmount").value);
    let win = Math.floor(bet * multiplier);

    balance += win;
    document.getElementById("balance").innerText = balance;

    alert("You won: " + win);
}
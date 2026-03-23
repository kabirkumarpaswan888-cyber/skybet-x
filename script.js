function showRegister() {
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("registerPage").style.display = "block";
}

function showLogin() {
  document.getElementById("loginPage").style.display = "block";
  document.getElementById("registerPage").style.display = "none";
}

// REGISTER
function register() {
  let user = document.getElementById("newUser").value.trim();
  let pass = document.getElementById("newPass").value.trim();

  if (user === "" || pass === "") {
    alert("Fill all fields");
    return;
  }

  // SAVE DATA
  localStorage.setItem("user", user);
  localStorage.setItem("pass", pass);

  alert("Account Created ✅");

  showLogin();
}

// LOGIN
function login() {
  let user = document.getElementById("username").value.trim();
  let pass = document.getElementById("password").value.trim();

  let savedUser = localStorage.getItem("user");
  let savedPass = localStorage.getItem("pass");

  // DEBUG (optional check)
  console.log(savedUser, savedPass);

  if (user === savedUser && pass === savedPass) {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("gamePage").style.display = "block";
  } else {
    alert("Wrong Login ❌");
  }
}

function toggleForm(form) {
  document.getElementById("login-form").classList.toggle("hidden", form !== "login");
  document.getElementById("signup-form").classList.toggle("hidden", form !== "signup");
}

function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  if (email && password) {
    localStorage.setItem("username", email.split('@')[0]);
    window.location.href = "dashboard.html";
  } else {
    alert("Enter valid credentials.");
  }
}

function signup() {
  const username = document.getElementById("signup-username").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  if (username && email && password) {
    localStorage.setItem("username", username);
    alert("Sign up successful. Please log in.");
    toggleForm("login");
  } else {
    alert("Fill in all fields.");
  }
}

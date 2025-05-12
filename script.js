
function togglePassword(id) {
  const field = document.getElementById(id);
  field.type = field.type === "password" ? "text" : "password";
}

function signup() {
  const username = document.getElementById('signup-username').value;
  const password = document.getElementById('signup-password').value;
  if (username && password) {
    localStorage.setItem(username, password);
    alert("Signup successful! Please login.");
    window.location.href = "index.html";
  } else {
    alert("Please fill in both fields.");
  }
}

function login() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  if (localStorage.getItem(username) === password) {
    localStorage.setItem('loggedInUser', username);
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid username or password.");
  }
}

function logout() {
  localStorage.removeItem('loggedInUser');
  window.location.href = "index.html";
}

window.onload = () => {
  const userDisplay = document.getElementById('username-display');
  if (userDisplay) {
    const user = localStorage.getItem('loggedInUser');
    if (user) {
      userDisplay.textContent = user;
    } else {
      window.location.href = "index.html";
    }
  }
};

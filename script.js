function showSignup() {
  document.getElementById('login-form').classList.add('hidden');
  document.getElementById('signup-form').classList.remove('hidden');
}

function showLogin() {
  document.getElementById('signup-form').classList.add('hidden');
  document.getElementById('login-form').classList.remove('hidden');
}

function login() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  const stored = JSON.parse(localStorage.getItem(username));
  if (stored && stored.password === password) {
    localStorage.setItem('loggedInUser', username);
    showDashboard(username);
  } else {
    alert("Incorrect credentials.");
  }
}

function signup() {
  const username = document.getElementById('signup-username').value;
  const password = document.getElementById('signup-password').value;
  localStorage.setItem(username, JSON.stringify({ password }));
  alert("Signup successful! Now you can log in.");
  showLogin();
}

function showDashboard(username) {
  document.getElementById('auth-container').classList.add('hidden');
  document.getElementById('dashboard').classList.remove('hidden');
  document.getElementById('username-display').textContent = username;
}

window.onload = function () {
  const user = localStorage.getItem('loggedInUser');
  if (user) {
    showDashboard(user);
  }
};

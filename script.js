let users = JSON.parse(localStorage.getItem('users')) || {};

window.onload = () => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        showDashboard(currentUser);
    }
};

function showLogin() {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('signup-form').classList.add('hidden');
}

function showSignup() {
    document.getElementById('signup-form').classList.remove('hidden');
    document.getElementById('login-form').classList.add('hidden');
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    if (users[username] && users[username] === password) {
        localStorage.setItem('currentUser', username);
        showDashboard(username);
    } else {
        alert("Invalid username or password.");
    }
}

function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    if (username && password) {
        users[username] = password;
        localStorage.setItem('users', JSON.stringify(users));
        alert("Signup successful! Please login.");
        showLogin();
        document.getElementById('login-username').value = username;
    } else {
        alert("Please fill all fields.");
    }
}

function showDashboard(username) {
    document.getElementById('auth-container').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
    document.getElementById('username-display').textContent = username;
}
function toggleForms() {
    document.getElementById('login-form').classList.toggle('hidden');
    document.getElementById('signup-form').classList.toggle('hidden');
}

function login() {
    const username = document.getElementById('login-username').value;
    document.getElementById('auth-container').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
    document.getElementById('username-display').textContent = username;
}

function signup() {
    const username = document.getElementById('signup-username').value;
    toggleForms();
    document.getElementById('login-username').value = username;
}
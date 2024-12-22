// script.js

// Event listener for switching to the sign-up form
document.getElementById('show-signup').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor behavior
    document.getElementById('login-form').classList.add('hidden'); // Hide the login form
    document.getElementById('signup-form').classList.remove('hidden'); // Show the sign-up form
});

// Event listener for switching to the login form
document.getElementById('show-login').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor behavior
    document.getElementById('signup-form').classList.add('hidden'); // Hide the sign-up form
    document.getElementById('login-form').classList.remove('hidden'); // Show the login form
});

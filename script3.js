// script.js
const logoutButton = document.getElementById('logout-btn');

// Simulate logout action
logoutButton.addEventListener('click', () => {
  // Redirect to the login page
  alert('You are being redirected to the login page.');
  window.location.href = '/login'; // Change this URL as needed
});

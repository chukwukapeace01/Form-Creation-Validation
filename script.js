document.addEventListener('DOMContentLoaded', function () {
  // Form and feedback div
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get inputs and trim values
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Validation flags
    let isValid = true;
    const messages = [];

    // Username validation
    if (username.length < 3) {
      isValid = false;
      messages.push('Username must be at least 3 characters long.');
    }

    // Email validation
    if (!email.includes('@') || !email.includes('.')) {
      isValid = false;
      messages.push('Please enter a valid email address that contains "@" and ".".');
    }

    // Password validation
    if (password.length < 8) {
      isValid = false;
      messages.push('Password must be at least 8 characters long.');
    }

    // Show feedback div
    feedbackDiv.style.display = 'block';

    if (isValid) {
      // Success message
      feedbackDiv.textContent = 'Registration successful!';
      feedbackDiv.style.color = '#28a745';
      feedbackDiv.style.backgroundColor = '#d4edda';

      // Optional: clear form fields
      usernameInput.value = '';
      emailInput.value = '';
      passwordInput.value = '';
    } else {
      // Error messages
      feedbackDiv.innerHTML = messages.join('<br>');
      feedbackDiv.style.color = '#dc3545';
      feedbackDiv.style.backgroundColor = '#ffbaba';
    }
  });
});


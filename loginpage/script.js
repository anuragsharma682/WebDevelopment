function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');
    if (username === '' || password === '') {
      errorMessage.textContent = 'Please enter both username and password.';
      return;
    }
    if (username === 'demo' && password === 'demo123') {
      alert('Login successful!');
    } else {
      errorMessage.textContent = 'Invalid username or password.';
    }
  }
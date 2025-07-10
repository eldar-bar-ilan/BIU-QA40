// main.js

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username.length < 3 || password.length < 3) {
      alert("Username and password must be at least 3 characters long.");
      return;
    }
  
    if (username === "admin" && password === "12345") {
      window.location.href = "success.html"; // Target page after login
    } else {
      alert("Invalid username or password.");
    }
  });
  
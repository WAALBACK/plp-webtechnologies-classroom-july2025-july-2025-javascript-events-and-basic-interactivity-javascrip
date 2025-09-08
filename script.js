// Event handling: click
document.getElementById("clickBtn").addEventListener("click", function() {
  document.getElementById("message").textContent = "Button was clicked!";
});

// Event handling: mouseover
document.getElementById("clickBtn").addEventListener("mouseover", function() {
  document.getElementById("message").textContent = "You hovered over the button!";
});

// Event handling: key input
document.addEventListener("keydown", function(event) {
  console.log("Key pressed: " + event.key);
});

// Light/Dark mode toggle
document.getElementById("modeToggle").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

document.getElementById("myForm").addEventListener("submit", function(event) {
  let valid = true;

  // Name validation
  let name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation
  let email = document.getElementById("email").value.trim();
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Enter a valid email";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation
  let password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Prevent form submission if not valid
  if (!valid) {
    event.preventDefault();
  }
});

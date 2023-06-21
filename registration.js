const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
  pwFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
  });
  
});
}); 




window.addEventListener('DOMContentLoaded', () => {
  const passwordInput = document.querySelector('.password');
  const errorMessage = document.createElement('div');
  errorMessage.className = 'error-message';
  errorMessage.style.display = 'none';
  passwordInput.parentNode.appendChild(errorMessage);

  passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    if (password.length < 8) {
      errorMessage.textContent = 'Password should be at least 8 characters long.';
      errorMessage.style.display = 'block';
    } else {
      errorMessage.style.display = 'none';
    }
  });
});



links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); //preventing form submit
 forms.classList.toggle("show-signup");
});
});


window.addEventListener('DOMContentLoaded', () => {
  const emailInput = document.querySelector('.input');
  const errorElement = document.querySelector('.error');

  emailInput.addEventListener('blur', () => {
    const email = emailInput.value.trim();
    if (!isValidEmail(email)) {
      errorElement.textContent = 'Invalid email address';
      emailInput.classList.add('invalid');
    } else {
      errorElement.textContent = '';
      emailInput.classList.remove('invalid');
    }
  });

  function isValidEmail(email) {
    // Email validation logic
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    return emailRegex.test(email);
  }
});



// Forgot password

window.addEventListener('DOMContentLoaded', () => {
  const forgotPassLink = document.querySelector('.forgot-pass');
  forgotPassLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior (e.g., navigating to the href)
    alert('Password reset functionality coming soon!');
  });
});




// Log in



window.addEventListener('DOMContentLoaded', () => {
  const loginButton = document.querySelector('.field button');

  loginButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission

    // Perform your desired actions here
    // For example, validate form fields and submit the form

    // Validation example: check if password field is not empty
    const passwordInput = document.querySelector('.password');
    const password = passwordInput.value;
    if (password.trim() === '') {
      alert('Please enter a password.');
      return; // Stop further execution
    }

    // Submit the form
    alert('Form submitted successfully!');
    // You can replace the alert above with your actual submission code
  });
});


// Google log in

window.addEventListener('DOMContentLoaded', () => {
  const googleButton = document.querySelector('.field.google');

  googleButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevents the default behavior of the anchor element

    // Perform your desired functionality here
    // For example, redirect the user to the Google login page
    window.location.href = 'https://accounts.google.com';
  });
});



// SIGN UP


window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const emailInput = document.querySelector('.input[type="email"]');
  const passwordInputs = document.querySelectorAll('.password');
  const eyeIcons = document.querySelectorAll('.eye-icon');
  const errorMessages = document.querySelectorAll('.error-message');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevents the form from submitting by default

    // Perform validation checks
    const email = emailInput.value;
    const password = passwordInputs[0].value;
    const confirmPassword = passwordInputs[1].value;

    // Validate email
    if (!validateEmail(email)) {
      showError(emailInput, errorMessages[0], 'Please enter a valid email address.');
      return;
    }

    // Validate password
    if (!validatePassword(password)) {
      showError(passwordInputs[0], errorMessages[1], 'Password should be at least 8 characters long.');
      return;
    }

    // Confirm password
    if (password !== confirmPassword) {
      showError(passwordInputs[1], errorMessages[2], 'Passwords do not match.');
      return;
    }

    // If all validations pass, submit the form
    form.submit();
  });

  // Toggle password visibility
  eyeIcons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
      const passwordInput = passwordInputs[index];
      passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
      icon.classList.toggle('bx-hide');
    });
  });

  // Show error message
  function showError(input, errorMessageElement, errorMessage) {
    errorMessageElement.textContent = errorMessage;
    errorMessageElement.style.display = 'block';
    input.classList.add('error');
  }

  // Validate email format
  function validateEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }

  // Validate password length
  function validatePassword(password) {
    return password.length >= 8;
  }
});



window.addEventListener('DOMContentLoaded', () => {
  const bodyElement = document.querySelector('body');

  setInterval(() => {
    const currentPosition = parseInt(getComputedStyle(bodyElement).backgroundPositionX);
    const newPosition = currentPosition - 1; // Adjust the value to change the speed of the animation
    bodyElement.style.backgroundPositionX = newPosition + 'px';
  }, 50); // Adjust the interval value for smoother or faster animation
});
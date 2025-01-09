function toggleCheckbox(selectedId) {
  // Az ellenőrzés, hogy csak egy checkbox legyen kijelölve
  let checkboxes = document.querySelectorAll("input[name='age']");
  checkboxes.forEach(checkbox => {
    if (checkbox.id !== selectedId) {
      checkbox.checked = false;
    }
  });
}

function toggleForms() {
  let loginForm = document.getElementById('loginForm');
  let registerForm = document.getElementById('registerForm');
  let formTitle = document.getElementById('formTitle');
  let toggleButton = document.getElementById('toggleButton');

  if (loginForm.classList.contains('d-none')) {
    loginForm.classList.remove('d-none');
    registerForm.classList.add('d-none');
    formTitle.textContent = 'Bejelentkezés';
    toggleButton.textContent = 'Regisztráció';
  } else {
    loginForm.classList.add('d-none');
    registerForm.classList.remove('d-none');
    formTitle.textContent = 'Regisztráció';
    toggleButton.textContent = 'Bejelentkezés';
  }
}

function validateForm() {
  let email = document.getElementById('registerEmail').value;
  let password = document.getElementById('registerPassword').value;
  let confirmPassword = document.getElementById('confirmPassword').value;
  let ageAbove18 = document.getElementById('ageAbove18').checked;
  let ageBelow18 = document.getElementById('ageBelow18').checked;

  let emailValid = /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(email);
  let passwordValid = password.length >= 8;
  let confirmPasswordValid = password === confirmPassword;
  let ageValid = ageAbove18 || ageBelow18;

  let submitButton = document.getElementById('registerSubmit');
  let passwordError = document.getElementById('passwordError');
  let confirmPasswordError = document.getElementById('confirmPasswordError');
  let emailError = document.getElementById('emailError');
  let ageError = document.getElementById('ageError');

  // Ellenőrizzük a jelszót és a megerősítést
  if (passwordValid && confirmPasswordValid) {
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
  } else {
    if (!passwordValid) {
      passwordError.textContent = 'A jelszónak legalább 8 karakter hosszúnak kell lennie.';
    }
    if (!confirmPasswordValid) {
      confirmPasswordError.textContent = 'A két jelszó nem egyezik.';
    }
  }

  // Ellenőrizzük az email-t
  if (!emailValid) {
    emailError.textContent = 'Az email cím érvénytelen.';
  } else {
    emailError.textContent = '';
  }

  // Ellenőrizzük az életkor megerősítését
  if (!ageValid) {
    ageError.textContent = 'Kérjük, erősítse meg az életkorát.';
  } else {
    ageError.textContent = '';
  }

  // Aktiváljuk a gombot, ha minden valid
  if (emailValid && passwordValid && confirmPasswordValid && ageValid) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

function togglePasswordVisibility() {
  let passwordField = document.getElementById('registerPassword');
  let confirmPasswordField = document.getElementById('confirmPassword');
  let isChecked = document.getElementById('showPassword').checked;

  // Jelszó megjelenítése vagy elrejtése
  passwordField.type = isChecked ? 'text' : 'password';
  confirmPasswordField.type = isChecked ? 'text' : 'password';
}
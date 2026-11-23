function validateStudentForm() {
  let isValid = true;

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");

  const firstNameError = document.getElementById("firstNameError");
  const lastNameError = document.getElementById("lastNameError");
  const emailError = document.getElementById("emailError");

  //first name
  if (firstName.value.trim() === "") {
    firstNameError.textContent = "First name is required.";
    firstName.classList.add("Invalid.");
    isValid = false;
  } else if (firstName.value.trim().length < 2) {
    firstNameError.textContent = "First name must be at least 2 characters long.";
    firstName.classList.add("Invalid.");
    isValid = false;
  }

  //last name
  if (lastName.value.trim() === "") {
    lastNameError.textContent = "Last name is required.";
    lastName.classList.add("Invalid.");
    isValid = false;
  } else if (lastName.value.trim().length < 2) {
    lastNameError.textContent = "Last name must be at least 2 characters long.";
    lastName.classList.add("Invalid.");
    isValid = false;
  }

  //email
  const emailValue = email.value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,}$/;
  if (emailValue === "") {
    emailError.textContent = "Email address is required.";
    email.classList.add("Invalid.");
    isValid = false;
  } else if (!emailRegex.test(emailValue)) {
    emailError.textContent = "Please enter a valid email address (e.g., student@example.com)";
    email.classList.add("Invalid.");
    isValid = false;
  }

  return isValid;
}

function clearValidationStyles() {
  const fields = ["firstName", "lastName", "email"];
  fields.forEach(fieldId => {
    const element = document.getElementById(fieldId);
    const errorSpan = document.getElementById(`${fieldId}Error`);
    if (element) element.classList.remove("invalid");
    if (errorSpan) errorSpan.textContent = "";
  });
}
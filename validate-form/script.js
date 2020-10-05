const form = document.querySelector("form");
const gmailForm = document.getElementById("gmail");
const usernameForm = document.getElementById("username");
const passwordForm = document.getElementById("password");
const passwordcheckForm = document.getElementById("passwordcheck");

document.querySelector("form button").addEventListener("click", function (e) {
  e.preventDefault();
  const gmail = gmailForm.value.trim();
  const username = usernameForm.value.trim();
  const password = passwordForm.value.trim();
  const passwordcheck = passwordcheckForm.value.trim();
  if (username === "") {
    setError(usernameForm, "Gmail cannot be blank");
  } else {
    setSuccess(usernameForm);
  }

  if (gmail === "") {
    setError(gmailForm, "Username cannot be blank");
  } else {
    setSuccess(gmailForm);
  }

  if (password === "") {
    setError(passwordForm, "Password cannot be blank");
  } else {
    setSuccess(passwordForm);
  }

  if (passwordcheck === "") {
    setError(passwordcheckForm, "Password check cannot be blank");
  } else if (passwordcheck !== password) {
    setError(passwordcheckForm, "Passwords does not match");
  } else {
    setSuccess(passwordcheckForm);
  }
});

function setError(input, text) {
  const formControl = input.parentElement;
  const errorText = formControl.querySelector("small");
  formControl.className = "form-control error";
  errorText.innerText = text;
}

function setSuccess(input, text) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

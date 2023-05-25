//form blur event listeners
function allValodation() {
  document.getElementById("name").addEventListener("blur", validateName);
  document.getElementById("zip").addEventListener("blur", validateZip);
  document.getElementById("email").addEventListener("blur", validateEmail);
  document.getElementById("phone").addEventListener("blur", validatePhone);
}
allValodation();
function validateName() {
  const name = document.getElementById("name");
  let re = /^[A-Za-z]{2,10}$/;
  if (!re.test(name.value)) {
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }
}
function validateZip() {
  const zip = document.getElementById("zip");
  let re = /^[0-9]{5}([0-9]{1,4})?$/; //5 digits are compulsory but u can put optional 4 digits more
  if (!re.test(zip.value)) {
    zip.classList.add("is-invalid");
  } else {
    zip.classList.remove("is-invalid");
  }
}
function validateEmail() {
  const email = document.getElementById("email");
  let re = /^([A-Za-z0-9_\-\.]+)@([A-Za-z0-9_\-\.]+)\.([A-Za-z]{2,5})$/;
  if (!re.test(email.value)) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
  }
}
function validatePhone() {
  const phone = document.getElementById("phone");
  let re = /^(\+){0,1}?([0-9 \-]){0,3}?\d{10}$/;
  if (!re.test(phone.value)) {
    phone.classList.add("is-invalid");
  } else {
    phone.classList.remove("is-invalid");
  }
}
document.getElementsByClassName("btn").addEventListener("click", allValodation);

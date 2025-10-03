const form = document.querySelector("form");
const email = document.getElementById("email");
const modal = document.querySelector(".modal");
const modalDismiss = document.querySelector(".modal__wrapper .btn");
const modalEMail = document.querySelector(".modal__wrapper p b");
let emailText = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const isValid = handleSubmit();
  if (isValid) {
    modal.classList.add("opened");
    modalEMail.innerHTML = emailText;
  }
});

function handleSubmit() {
  const err = email.parentElement.querySelector("span");
  if (!email.checkValidity()) {
    err.classList.add("active");
    email.classList.add("err");
    return false;
  } else {
    err.classList.remove("active");
    email.classList.remove("err");
    emailText = email.value;
    return true;
  }
}
modalDismiss.addEventListener("click", () => {
  modal.classList.remove("opened");
  emailText = "";
  form.reset();
});

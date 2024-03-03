const buttonEl = document.getElementById("btn");
const inputEl = document.getElementById("input");
const copyEl = document.querySelector(".fa-copy");
const alertEl = document.querySelector(".alert-container");

buttonEl.addEventListener("click", () => {
  create_password();
});

copyEl.addEventListener("click", () => {
  copy_password();
  if(inputEl.value){
    alertEl.classList.remove("active");
    setTimeout(() => {
    alertEl.classList.add("active");
    }, 2000);
  }
});

function create_password() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_+=[]{};:<>,.?/|";
  let passwordLength = 14;
  let password = "";
  for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
  }

  inputEl.value = password;
}

function copy_password() {
  inputEl.select();
  inputEl.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputEl.value);
  alertEl.textContent = inputEl.value + " " + "copied";
}

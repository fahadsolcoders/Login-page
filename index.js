function password() {
  const password = document.getElementById("password");
  const eyeIcon = document.getElementById("eyeIcon");
  const password2 = password.type === "password";
  password.type = password2 ? "text" : "password";
  if (eyeIcon) {
    eyeIcon?.classList.toggle("fa-eye", password2);
    eyeIcon?.classList.toggle("fa-eye-slash", !password2);
  }
}

document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  if (email.value == "fahad@solcoders.com" && password.value == "theacademy1230") {
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    showsuccessmessage();
  } else if (email.value !== "fahad@solcoders.com" && password.value !== "theacademy1230") {
    setTimeout(() => {
        email.value = "";
        password.value = "";
      document.getElementById("para").classList.add("hidden2");
    }, 1000);
    document.getElementById("para").classList.remove("hidden2");
  }
});

function showsuccessmessage() {
  document.getElementById("loginform").classList.add("hidden");
  document.getElementById("successmessage").classList.remove("hidden");
}

window.addEventListener("load", () => {
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  if (email && password) {
    showsuccessmessage();
  }
});

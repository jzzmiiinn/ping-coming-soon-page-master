const form = document.getElementById("emailForm");
const input = document.getElementById("emailInput");
const error = document.getElementById("error");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value === "" || !emailPattern.test(input.value)) {
    error.textContent = "Please provide a valid email address";
    error.className = "text-red-500 text-sm mt-2";
    input.classList.add("border-red-500");
  } else {
    error.textContent = "Success!";
    error.className = "text-green-500 text-sm mt-2";
    input.classList.remove("border-red-500");
  }
});

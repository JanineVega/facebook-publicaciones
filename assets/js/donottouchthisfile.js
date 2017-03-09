var element = document.querySelector(".form-signin");
element.addEventListener("submit", function(event) {
  event.preventDefault();
  validateForm();
});

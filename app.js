const modalBtn = document.getElementById("modal-btn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");
const form = document.getElementById("form");

form.addEventListener("submit", function handleSubmit(e) {
  e.preventDefault();
  //code to submit form here
  form.reset();
});

modalBtn.onclick = function () {
  modal.style.display = "block";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

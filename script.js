/* Updated JavaScript */
// Get the modal
const modal = document.getElementById("modal");

// Get the letter element
const letter = document.getElementById("letter");

// Get the <span> element that closes the modal
const closeBtn = document.getElementById("close");

// When the user clicks on the letter, open the modal
letter.addEventListener("click", () => {
  modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

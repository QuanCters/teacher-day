/* Updated JavaScript */

// Get the modal
const modal = document.getElementById("modal");

// Get the letter element
const letter = document.getElementById("letter");

// Get the animated-mail element
const animatedMail = document.querySelector(".animated-mail");

// Get the <span> element that closes the modal
const closeBtn = document.getElementById("close");

// When the user clicks on the letter, open the modal and animate the letter
letter.addEventListener("click", () => {
  // Add the show class to display the modal with animation
  modal.classList.add("show");

  // Add the animate class to trigger the bounce animation
  animatedMail.classList.add("animate");
});

// When the animation ends, remove the animate class
animatedMail.addEventListener("animationend", () => {
  animatedMail.classList.remove("animate");
});

closeBtn.addEventListener("click", () => {
  // Add the hide class to trigger fade-out
  modal.classList.add("hide");

  // Remove the show class after the animation completes
  modal.addEventListener(
    "animationend",
    () => {
      modal.classList.remove("show", "hide");
    },
    { once: true }
  );
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.add("hide");

    modal.addEventListener(
      "animationend",
      () => {
        modal.classList.remove("show", "hide");
      },
      { once: true }
    );
  }
});

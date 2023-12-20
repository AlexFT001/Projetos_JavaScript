let barra = document.querySelector(".barra");

document.addEventListener("keydown", (e) => {
  if (e.key == "d" || e.key == "ArrowRight") {
    // Get the current left position and convert it to an integer
    let currentLeft = parseInt(barra.style.left) || 0;
    if (currentLeft + 10 < 1610) {
      // Increment the left position by 10 pixels
      barra.style.left = currentLeft + 10 + "px";
    }
  } else if (e.key == "a" || e.key == "ArrowLeft") {
    // Get the current left position and convert it to an integer
    let currentLeft = parseInt(barra.style.left) || 0;
    if (currentLeft - 10 > -1) {
      // Decrement the left position by 10 pixels
      barra.style.left = currentLeft - 10 + "px";
    }
  }
});

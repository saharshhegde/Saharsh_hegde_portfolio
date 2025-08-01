const warningText = document.getElementById("warningText");
const loginPopup = document.getElementById("loginPopup");
const mainImage = document.getElementById("mainImage");
const secondImage = document.getElementById("secondImage");

// Step 1: Show warning after 3s
setTimeout(() => {
  warningText.style.opacity = 1;
}, 3000);

// Step 2: Hide warning after it’s fully visible (3s show + 3s fade out)
setTimeout(() => {
  warningText.style.opacity = 0;
}, 6000);

// Step 3: At 6s, begin fade out CBI and show second image
setTimeout(() => {
  mainImage.style.opacity = 0;
  secondImage.style.opacity = 1;
}, 9000);

// Step 4: Show login popup smoothly
setTimeout(() => {
  loginPopup.style.opacity = 1;
  loginPopup.style.pointerEvents = "all";
}, 9000);

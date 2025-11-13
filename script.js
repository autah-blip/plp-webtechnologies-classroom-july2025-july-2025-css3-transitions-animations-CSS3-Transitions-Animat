// ==============================
// Part 2: JavaScript Functions
// ==============================

// Global variable to demonstrate scope
let globalCount = 0;

/**
 * Increment the global count by a specified amount.
 * @param {number} amount - The amount to add.
 * @returns {number} The new global count.
 */
function incrementCount(amount) {
  let newValue = globalCount + amount; // local variable
  globalCount = newValue; // update global variable
  return globalCount;
}

// Test the function
console.log("New Count:", incrementCount(5)); // 5
console.log("New Count:", incrementCount(3)); // 8

/**
 * Trigger a CSS animation by adding a class temporarily.
 * @param {HTMLElement} element - The element to animate.
 * @param {string} className - The class to add for animation.
 * @param {number} duration - Duration in milliseconds.
 */
function triggerAnimation(element, className, duration = 1000) {
  element.classList.add(className);
  setTimeout(() => {
    element.classList.remove(className);
  }, duration);
}

// ==============================
// Part 3: JS-triggered Animations
// ==============================

// Animate box when button is clicked
const animatedBox = document.getElementById("animatedBox");
document.getElementById("triggerAnimBtn").addEventListener("click", () => {
  triggerAnimation(animatedBox, "box-animate", 500);
});

// Flip card when clicked
const card = document.getElementById("card");
card.addEventListener("click", () => {
  card.classList.toggle("flipped");
});

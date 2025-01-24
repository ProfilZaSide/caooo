const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container"); // Fixed selector (removed `.yes`)
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Move the "No" button to a random position on hover
noBtn.addEventListener("mouseover", () => {
  const containerBounds = questionContainer.getBoundingClientRect();
  const buttonWidth = noBtn.offsetWidth;
  const buttonHeight = noBtn.offsetHeight;

  const maxX = containerBounds.width - buttonWidth;
  const maxY = containerBounds.height - buttonHeight;

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// "Yes" button functionality
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none"; // Hide question container
  heartLoader.style.display = "block"; // Show heart loader

  setTimeout(() => {
    heartLoader.style.display = "none"; // Hide heart loader
    resultContainer.style.display = "block"; // Show result container
    gifResult.play(); // Play the video/gif
  }, 3000); // 3-second delay
});

const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".userResult img");
const cpuResult = document.querySelector(".cpuResult img");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".optionImage");

const choices = ["R", "P", "S"];
const cpuImages = [
  "images/rock.png",
  "images/paper.png",
  "images/scissors.png",
];

const outcomes = {
  RR: "Draw",
  RP: "CPU",
  RS: "YOU",
  PP: "Draw",
  PR: "YOU",
  PS: "CPU",
  SS: "Draw",
  SR: "CPU",
  SP: "YOU",
};

/* ----------------- Utility functions ----------------- */

function resetUI() {
  userResult.src = cpuResult.src = "images/rock.png";
  result.textContent = "Wait...";
}

function setActiveOption(clickedIndex) {
  optionImages.forEach((img, index) => {
    img.classList.toggle("active", index === clickedIndex);
  });
}

function startAnimation() {
  gameContainer.classList.add("start");
}

function stopAnimation() {
  gameContainer.classList.remove("start");
}

function getUserChoice(index, target) {
  return {
    value: choices[index],
    image: target.querySelector("img").src,
  };
}

function getCpuChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return {
    value: choices[randomIndex],
    image: cpuImages[randomIndex],
  };
}

function determineWinner(userValue, cpuValue) {
  if (userValue === cpuValue) return "Match Draw";
  return `${outcomes[userValue + cpuValue]} Won!!!`;
}

function updateResults(userImage, cpuImage, message) {
  userResult.src = userImage;
  cpuResult.src = cpuImage;
  result.textContent = message;
}

/* ----------------- Main game logic ----------------- */

function playRound(index, event) {
  resetUI();
  setActiveOption(index);
  startAnimation();

  setTimeout(() => {
    stopAnimation();

    const user = getUserChoice(index, event.currentTarget);
    const cpu = getCpuChoice();
    const finalResult = determineWinner(user.value, cpu.value);

    updateResults(user.image, cpu.image, finalResult);
  }, 2500);
}

/* ----------------- Event binding ----------------- */

function initGame() {
  optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => playRound(index, e));
  });
}

initGame();

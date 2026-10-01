const fortunes = [
  "Yes, absolutely!",
  "No, definitely not.",
  "Maybe tomorrow...",
  "You will have good luck today!",
  "Ask again later.",
  "Great things are coming your way!"
];

const fortuneBox = document.getElementById("fortune-box");
const button = document.getElementById("fortune-btn");

function getFortune() {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  fortuneBox.textContent = fortunes[randomIndex];
}

button.addEventListener("click", getFortune);
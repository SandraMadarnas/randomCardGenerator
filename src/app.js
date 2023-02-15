/* eslint-disable */
import "bootstrap";
import "./style.css";

const button = document.querySelector("button");
const display = document.querySelector("#display");

// const Body = document.querySelector("body");
let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
let suits = ["♠", "♣", "♥", "♦"];

function getRandomCard() {
  const suit = suits[Math.floor(Math.random() * suits.length)];
  const number = numbers[Math.floor(Math.random() * numbers.length)];
  // let card = suit + " " + number + "   " + suit;

  let generateCard = (display.innerHTML = `<div class="suitup"><span id="suitup">${suit}</span></div>
  <div class="num"><span id="num">${number}</span></div>
  <div class="suitdown"><span id="suitdown">${suit}</span></div>`);

  if (suit === "♥" || suit === "♦") {
    generateCard = "<span class='red'>" + generateCard + "</span>";
  } else {
    generateCard = "<span class='black'>" + generateCard + "</span>";
  }
  return generateCard;
}

button.addEventListener("click", function() {
  const card = getRandomCard();
  // display.textContent = card;
  display.innerHTML = card;
});

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// const Body = document.querySelector("body");
let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
let suits = ["♠", "♣", "♥", "♦"];

function getRandomCard() {
  const suit = suits[Math.floor(Math.random() * suits.length)];
  const number = numbers[Math.floor(Math.random() * numbers.length)];
  let card = number + "   " + suit;

  if (suit === "♥" || suit === "♦") {
    card = "<span class='red'>" + card + "</span>";
  }

  return card;
}

const button = document.querySelector("button");
const display = document.querySelector("#display");

button.addEventListener("click", function() {
  const card = getRandomCard();
  // display.textContent = card;
  display.innerHTML = card;
});

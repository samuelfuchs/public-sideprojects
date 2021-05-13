'use strict';
// console.log(document.querySelector('.message').textContent);

// DOM
// Document Object Model: Structured representation of HTML Documents. Allows JS to access HTML elements and styles to manipulate them.
// Change text, HTML attributes and even CSS styles
// Stored in a Tree structure, generated by browser on HTML load
// DOM !== JS
// it's part of web api - labraries also written in JS
// API - Application Programming Interface
/* ===========
Selecting and Manipulating Elements
=========== */
// document.querySelector('.message').textContent = 'Correct Number! 🎉';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// // .value to get a value. Right now it is empty
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
/* ===========
Handling Click Events
=========== */
// Event is something that happens on the page. Click, mouse moving, etc

// Select the element where the event should happen
// 'click' is the type of the event, the second arguement is a func
// Remember: a func is just an value, so we put it in here
// The func will only be called when the event happens
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(typeof guess);
//   if (!guess) {
//     document.querySelector('.message').textContent = '⛔ No number!';
//   }
// });
/* ===========
Implementing the Game Logic
=========== */
// Make secret number
// Math.trunc 'removes' noise
const secretNumber = Math.trunc(Math.random() * 20) + 1;
// this will change, part of the state of the code
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number! 🎉';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '↗ Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '↘ Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

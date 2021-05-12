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
document.querySelector('.message').textContent = 'Correct Number! 🎉';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

// .value to get a value. Right now it is empty
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
/* ===========
Handling Click Events
=========== */

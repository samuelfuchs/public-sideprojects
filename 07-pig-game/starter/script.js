'use strict';
// Selecting elements

// there's another way in selecting by ID like we do here:
const score0El = document.querySelector('#score--0');
//this one:
// it's 'supposed' to be a little bit faster than the query selector
const score1El = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

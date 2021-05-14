'use strict'

// document.querySelector('.message').textContent = 'OMG'
let score = 10
let highscore = 0

let secretNumber = Math.trunc(Math.random() * 10) + 1

// REMOVE WHEN DONE
document.querySelector('.number').textContent = secretNumber

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value)
	if (!guess) {
		document.querySelector('.message').textContent = 'No number!'
	} else if (guess === secretNumber) {
		document.querySelector('.message').textContent = 'Corret number!'
		document.querySelector('body').style.backgroundColor = '#60b347'
	} else if (guess > secretNumber) {
		if (score > 1) {
			document.querySelector('.message').textContent = 'Too high!'
			score--
			document.querySelector('.score').textContent = score
		} else {
			document.querySelector('.message').textContent = 'You lost the game'
			document.querySelector('.score').textContent = 0
		}
	} else if (guess < secretNumber) {
		if (score > 1) {
			document.querySelector('.message').textContent = 'Too low!'
			score--
			document.querySelector('.score').textContent = score
		} else {
			document.querySelector('.message').textContent = 'You lost the game'
			document.querySelector('.score').textContent = 0
		}
	}
})

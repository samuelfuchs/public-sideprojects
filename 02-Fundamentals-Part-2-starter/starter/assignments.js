'use strict'
/*
// ====
// Functions
// ====

function describeCountry(country, population, capitalCity) {
	console.log(
		`${country} has ${population} million people and its capital city is ${capitalCity}`
	)
}

describeCountry('Brazil', 211, 'Brasilia')
describeCountry('Argentina', 45, 'Buenos Aires')
describeCountry('Canada', 37, 'Ottawa')


// ====
// Function Declarations vs. Expressions
// ====
// Func declaration:
function percentageOfWorld1(population) {
	return (population / 7900) * 100
}

const brazil1 = percentageOfWorld1(211)
const argentina1 = percentageOfWorld1(45)
const canada1 = percentageOfWorld1(37)
console.log(brazil1, argentina1, canada1)

// Func expression:
const percentageOfWorld2 = function (population) {
	return (population / 7900) * 100
}

const brazil2 = percentageOfWorld2(211)
const argentina2 = percentageOfWorld2(45)
const canada2 = percentageOfWorld2(37)
console.log(brazil2, argentina2, canada2)

// ====
// Arrow Functions
// ====
const percentageOfWorld3 = (population, country) =>
	`${country} has ${(population / 7900) * 100}% of the world's population`

console.log(percentageOfWorld3(211, 'Brazil'))

// ====
// Functions Calling Other Functions
// ====

function describePopulation(population, country) {
	const calcPercentage = percentageOfWorld1(population)
	return `${country} has ${population} million people, which is about ${calcPercentage}% of the world.`
}

function percentageOfWorld1(population) {
	return (population / 7900) * 100
}

console.log(describePopulation(211, 'Brazil'))

// ====
// Coding Challenge #1
// ====
// const calcAge3 = (birthYear) => 2037 - birthYear

// const age3 = calcAge3(1990)
// console.log(age3)

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

const avgDolphins1 = calcAverage(85, 54, 41)
const avgKoalas1 = calcAverage(23, 34, 27)

function checkWinner(avgDolphins1, avgKoalas1) {
	if (avgDolphins1 >= 2 * avgKoalas1) {
		console.log(`Dolphins win (${avgDolphins1} vs. ${avgKoalas1})`)
	} else if (avgKoalas1 >= 2 * avgDolphins1) {
		console.log(`Koalas win (${avgKoalas1} vs. ${avgDolphins1})`)
	} else {
		console.log(
			`No one wins 😢. (Koalas: ${avgKoalas1} Dolphins: ${avgDolphins1})`
		)
	}
}

console.log(avgDolphins1, avgKoalas1)
checkWinner(avgDolphins1, avgKoalas1)
*/
// ====
// Introduction to Arrays
// ====

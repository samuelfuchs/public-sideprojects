// Values and Variables
const country = 'Brazil'
const continent = 'South America'
let population = '211'

// Data Types
const isIsland = false
let language

// let, const and var
language = 'Portuguese'

// Basic Operators

let countrySplitInHalf = population / 2
countrySplitInHalf++

const populationFinland = 6

const isCountryMorePopulationThanFinland = country > populationFinland

const avgPop = 33

const isCountryMorePopulationThanAvgPop = country < avgPop

// const description =
// 	country +
// 	' is in ' +
// 	continent +
// 	', and its ' +
// 	population +
// 	' million people speak ' +
// 	language

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`

console.log(
	isCountryMorePopulationThanAvgPop,
	isCountryMorePopulationThanFinland,
	countrySplitInHalf,
	isIsland,
	description
)

/*
// Coding Challenge #1
const weightMark = 95
const heightMark = 1.88

const weightJohn = 85
const heightJohn = 1.76

const bmiMark = weightMark / heightMark ** 2
const bmiJohn = weightJohn / heightJohn ** 2

const markHigherBMI = bmiMark > bmiJohn
console.log(markHigherBMI)
*/

// Taking Decisions: if/else Statements

if (population > 33) {
	console.log(`${country}'s population is above average`)
} else {
	console.log(`${country}'s population is ${avgPop - population} below average`)
}

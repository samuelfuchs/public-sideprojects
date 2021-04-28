/*
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

// Taking Decisions: if/else Statements

if (population > 33) {
	console.log(`${country}'s population is above average`)
} else {
	console.log(`${country}'s population is ${avgPop - population} below average`)
}
*/

// Coding Challenge #1 + #2
const massMark = 95
const heightMark = 1.88

const massJohn = 85
const heightJohn = 1.76

const bmiMark = massMark / heightMark ** 2
const bmiJohn = massJohn / heightJohn ** 2

const markHigherBMI = bmiMark > bmiJohn
console.log(markHigherBMI)

if (bmiMark > bmiJohn) {
	console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`)
} else {
	console.log(`John's BMI (${bmiJohn}) is higher than Mark's(${bmiMark})!`)
}

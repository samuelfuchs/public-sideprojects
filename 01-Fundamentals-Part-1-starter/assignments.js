/*
// ==== Values and Variables
const country = 'Brazil'
const continent = 'South America'
let population = '211'

// ==== Data Types
const isIsland = false
let language

// let, const and var
language = 'Portuguese'

// ==== Basic Operators

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

// ==== Taking Decisions: if/else Statements

if (population > 33) {
	console.log(`${country}'s population is above average`)
} else {
	console.log(`${country}'s population is ${avgPop - population} below average`)
}


// ==== Coding Challenge #1 + #2
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

// ==== Type Conversion and Coercion

console.log(
	'9' - '5',
	'19' - '13' + '17',
	'19' - '13' + 17,
	'123' < 57,
	5 + '4' + 9 - 4 - 2
)

// ==== Equality Operators: == vs. ===
const numNeighbours = Number(
	prompt('How many neighbour countries does your country have?')
)

if (numNeighbours === 1) {
	console.log('Only 1 border')
} else if (numNeighbours > 1) {
	console.log('More than 1 border')
} else {
	console.log('No border')
}


// ==== Logical Operators
const country = 'Brazil'
const pop = 10
const lang = 'english'
const isIsland = false

if (lang === 'english' && pop <= 50 && !isIsland) {
	console.log(`You should live in ${country}`)
} else {
	console.log(`${country} does not meet your criteria`)
}

// ==== Coding Challenge #3

// const avgScoreDolphins = (96 + 108 + 89) / 3
// const avgScoreKoalas = (88 + 91 + 110) / 3

// const avgScoreDolphins = (97 + 112 + 101) / 3
// const avgScoreKoalas = (109 + 95 + 123) / 3

const avgScoreDolphins = (97 + 112 + 101) / 3
const avgScoreKoalas = (109 + 95 + 106) / 3
console.log(avgScoreDolphins, avgScoreKoalas)

if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= 100) {
	console.log(
		`Team Koalas wins the trophy with an average score of ${avgScoreKoalas}`
	)
} else if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
	console.log(
		`Team Dolphins wins the trophy with an average score of ${avgScoreDolphins}`
	)
} else if (avgScoreKoalas === avgScoreDolphins && avgScoreDolphins >= 100) {
	console.log(
		`It's a draw! Both teams have an average score of ${avgScoreDolphins}`
	)
} else {
	console.log(`No one wins! No team has reached the minimum requirements`)
}

// ==== The switch Statement
const language = 'portuguese'

switch (language) {
	case 'chinese':
	case 'mandarin':
		console.log('MOST number of native speakers! 🥇')
		break
	case 'spanish':
		console.log('2nd place in number of native speakers 🥈')
		break
	case 'english':
		console.log('3rd place 🥉')
		break
	case 'hindi':
		console.log('Number 4 🏅')
		break
	case 'arabic':
		console.log('5th most spoken language')
		break
	default:
		console.log('Great language, too! 😁')
		break
}

// ==== The Conditional (Ternary) Operator
const country = 'Brazil'
let population = '211'

console.log(
	`${country}'s population is ${population >= 33 ? 'above' : 'below'} average`
)
*/
// ==== Coding Challenge #4
const bill = 275
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2

console.log(
	`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
)

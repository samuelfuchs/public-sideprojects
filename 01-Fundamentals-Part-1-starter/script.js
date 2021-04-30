/*
// JavaScript Fundamentals - Part 1

let js = 'amazing'

console.log(40 + 8 + 23 - 10)

let firstName = 'Samuel'
console.log(firstName)

// Values and Variables
let country = 'Brazil'
let continent = 'South America'
let population = '211'

console.log(country, continent, population)

// Data Types
let javascriptIsFun = true
console.log(javascriptIsFun)

// console.log(typeof true)
console.log(typeof javascriptIsFun)
// console.log(typeof 23)
// console.log(typeof '23')

javascriptIsFun = 'YES!'
console.log(javascriptIsFun)

let year
console.log(year)
console.log(typeof year)

year = 1991
console.log(typeof year)

console.log(typeof null)

// let, const and var
let age = 30
age = 31

const birthYear = 1991
// birthYear = 1990
// const job

var job = 'programmer'
job = 'teacher'

lastName = 'Fuchs'
console.log(lastName)

// Basic Operators

//Math operators
const now = 2037
const ageSamuel = now - 1990
const ageSarah = now - 2018
console.log(ageSamuel, ageSarah)

console.log(ageSamuel * 2, ageSamuel / 10, 2 ** 3)

const firstName = 'Samuel'
const lastName = 'Fuchs'
console.log(firstName + ' ' + lastName)

// Assignment operators
let x = 10 + 5
x += 10 // x = x + 10 = 25
x *= 4 // x = x * 4 = 100
x++ // x = x + 1
x--
x--
console.log(x)

// Comparison operators
console.log(ageSamuel > ageSarah) // <, >, <=, >=
console.log(ageSarah >= 18)

const isFullAge = ageSarah >= 18

console.log(now - 1991 > now - 2018)

// Operator Precedence
const now = 2037
const ageSamuel = now - 1990
const ageSarah = now - 2018

console.log(now - 1991 > now - 2018)

console.log(25 - 10 - 5)

let x, y
x = y = 25 - 10 - 5
console.log(x, y)

const averageAge = (ageSamuel + ageSarah) / 2
console.log(ageSamuel, ageSarah, averageAge)


// Strings and Template Literals
const firstName = 'Samuel'
const job = 'teacher'
const birthYear = 1990
const year = 2037

const samuel =
	"I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!'
console.log(samuel)

const samuelNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
console.log(samuelNew)

console.log(`Just a regular string...`)

console.log('String with \n\
multiple \n\
lines')

console.log(`String
multiple
lines`)


// Taking Decisions: if/else Statements
const age = 15

if (age >= 18) {
	console.log('Sarah can start driving license 🚗')
} else {
	const yearsLeft = 18 - age
	console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}

const birthYear = 2012

let century
if (birthYear <= 2000) {
	century = 20
} else {
	century = 21
}
console.log(century)

// Type Conversion and Coercion
// type conversion
const inputYear = '1991'
console.log(Number(inputYear), inputYear)

console.log(Number(inputYear) + 18)
console.log(Number('Samuel'))
console.log(typeof NaN)

console.log(String(23), 23)

// type coercion
console.log('I am ' + 23 + ' years old')
console.log('23' - '10' - 3)
console.log('23' + '10' + 3)
console.log('23' > '18')

let n = '1' + 1
n = n - 1
console.log(n)

// Truthy and Falsy Values
const money = 0
if (money) {
	console.log("Don't spend it all ;)")
} else {
	console.log('You should get a job!')
}

let height
if (height) {
	console.log('YAY! Height is defined')
} else {
	console.log('Height is UNDEFINED')
}

// Equality Operators: == vs. ===
const age = '18'
if (age === 18) console.log('You just became an adult :D (strict)')
if (age == 18) console.log('You just became an adult :D (loose)')

const favourite = Number(prompt("What's your favourite number?"))
console.log(favourite)

if (favourite === 23) {
	console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
	console.log('7 is also a cool number')
} else if (favourite === 9) {
	console.log('9 is also a super cool number')
} else {
	console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?')
*/
// Boolean Logic
// ogical Operators
const hasDriversLicense = true
const hasGoodVision = true

console.log(hasDriversLicense && hasGoodVision) // And
console.log(hasDriversLicense || hasGoodVision) // OR
console.log(!hasDriversLicense)

// if (hasDriversLicense && hasGoodVision) {
// 	console.log('Sarah is able to drive!')
// } else {
// 	console.log('Someone else should drive...')
// }

const isTired = true
console.log(hasDriversLicense && hasGoodVision && isTired)

if (hasDriversLicense && hasGoodVision && !isTired) {
	console.log('Sarah is able to drive!')
} else {
	console.log('Someone else should drive...')
}

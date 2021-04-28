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
*/

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

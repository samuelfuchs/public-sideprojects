/*
// JavaScript Fundamentals - Part 1

let js = 'amazing'

console.log(40 + 8 + 23 - 10)

let firstName = 'Samuel'
console.log(firstName)

// ==== Values and Variables
let country = 'Brazil'
let continent = 'South America'
let population = '211'

console.log(country, continent, population)

// ==== Data Types
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

// ==== let, const and var
let age = 30
age = 31

const birthYear = 1991
// birthYear = 1990
// const job

var job = 'programmer'
job = 'teacher'

lastName = 'Fuchs'
console.log(lastName)

// ==== Basic Operators

// ==== Math operators
const now = 2037
const ageSamuel = now - 1990
const ageSarah = now - 2018
console.log(ageSamuel, ageSarah)

console.log(ageSamuel * 2, ageSamuel / 10, 2 ** 3)

const firstName = 'Samuel'
const lastName = 'Fuchs'
console.log(firstName + ' ' + lastName)

// ==== Assignment operators
let x = 10 + 5
x += 10 // x = x + 10 = 25
x *= 4 // x = x * 4 = 100
x++ // x = x + 1
x--
x--
console.log(x)

// ==== Comparison operators
console.log(ageSamuel > ageSarah) // <, >, <=, >=
console.log(ageSarah >= 18)

const isFullAge = ageSarah >= 18

console.log(now - 1991 > now - 2018)

// ==== Operator Precedence
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


// ==== Strings and Template Literals
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


// ==== Taking Decisions: if/else Statements
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

// ==== Type Conversion and Coercion
// type conversion
const inputYear = '1991'
console.log(Number(inputYear), inputYear)

console.log(Number(inputYear) + 18)
console.log(Number('Samuel'))
console.log(typeof NaN)

console.log(String(23), 23)

// ==== type coercion
console.log('I am ' + 23 + ' years old')
console.log('23' - '10' - 3)
console.log('23' + '10' + 3)
console.log('23' > '18')

let n = '1' + 1
n = n - 1
console.log(n)

// ==== Truthy and Falsy Values
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

// ==== Equality Operators: == vs. ===
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

// ==== Boolean Logic

// ==== Logical Operators
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

// ==== The switch Statement
const day = 'thursday'

switch (day) {
	case 'monday': // day === 'monday'
		console.log('Plan my course structure')
		console.log('Go to coding meetup')
		break // without the breack the code continues to execute
	case 'tuesday':
		console.log('Prepare theory videos')
		break
	case 'wednesday':
	case 'thursday':
		console.log('Write code examples')
		break
	case 'friday':
		console.log('Record videos')
		break
	case 'saturday':
	case 'sunday':
		console.log('Enjoy the weekend 😁')
		break
	default:
		console.log('Not a valid day!')
		break
}

if (day === 'monday') {
	console.log('Plan my course structure')
	console.log('Go to coding meetup')
} else if (day === 'tuesday') {
	console.log('Prepare theory videos')
} else if (day === 'wednesday') {
	console.log('Nothing planned for today')
} else if (day === 'thursday') {
	console.log('Write code examples')
} else if (day === 'friday') {
	console.log('Record videos')
} else if (day === 'saturday') {
	console.log('Nothing planned for today')
} else if (day === 'sunday') {
	console.log('Enjoy the weekend 😁')
} else {
	console.log('Not a valid day!')
}

// ==== Statements and Expressions

// Statements are like complete sentences
// Expressions produce values

// ==== The Conditional (Ternary) Operator
const age = 23
age >= 18
	? console.log('I like to drink wine 🍷')
	: console.log('I like to drink water 💦')

const drink = age >= 18 ? 'wine 🍷' : 'water 💦'
console.log(drink)

let drink2
if (age >= 18) {
	drink2 = 'wine 🍷'
} else {
	drink2 = 'water 💦'
}
console.log(drink2)

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💦'}`)

// Ternary operators do not replace if/else statements. For example
// if we need validation for bigger blocks of code we use if/else

// JavaScript Releases: ES5, ES6+ and ESNext

// 1995-Brendan Eich creates the very first version of JS in just 10 days
// It was called Mocha, but already had many fundamental features of modern JS

// 1996-Mocha changes to LiveScript and then to JavaScript, in order to
// attract Java devs. However, JS has almost nothing to do with Java
// MS launches IE, copying JS from Netscape and calling it JScript

// 1997-With a need to standardize the language, ECMA releases ECMAScript 1 (ES1),
// the first official standart for JS (ECMAScript is the standard, JS the language in practice)

// 2009-ES5 (ECMAScript 5) is released with lots of great new features

// 2015-ES6/ES2015 (ECMAScript 2015) was released: the biggest update to the language ever!
// ECMAScript changes to an annual release cycle in order to ship
// less features per update

// 2016 and beyond-Release of ES2016/ES2017/ES2019/.../ES2050

// Backwards compatibility: don't break the web!
// Code written today is readable by computers back in the days

// Old features are never removed
// Not really new versions, just incremental updates (releases)
// Websites keep working forever!

// Not forwards compatible

// 2 Phases
// Development - you use Google Chrome and build your app
// Production - Use Babel to transpile and polyfill your code (converting back to ES5 to ensure browser compatibility for all users)

// ES5 - Full supported in all browsers (down to IE 9 from 2011)
// Ready to be used today

// ES6+ Well supported in all modern browsers
// No support in older browsers
// Can use most features in production with transpiling and polyfilling

// ES2021 and beyond - ESNext: Future versions of the language
// (new feature proposals that reach Stage 4)
// Can already use some features in production with transpiling and polyfilling

// 3 reasons why we should not forget the Good Ol' JS:
// You will better understand how JS actually works
// Many tutorials and code you find online today are still in ES5
// When working on old codebases, these will be written in ES5
*/

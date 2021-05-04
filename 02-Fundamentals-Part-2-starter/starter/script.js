'use strict'
/*
let hasDriversLicense = false
const passTest = true

if (passTest) hasDriverLicense = true
if (hasDriversLicense) console.log('I can drive!!')

const interface = 'Audio'
const private = 534

// Is a special mode to write more secure JS code
// Has to be very first statement in the script
// Possibility to apply to a single function
// Avoids accidental errors
// 1st: forbids us to do certain things
// 2nd: creates visible errors in the console where normal JS mode would
// have failed silently

// ====
// Functions
// ====

// Fundamental building block of programming
// A piece of code we can reuse
// Allow us to write more maintainable code without having to write manually code over and over again
// a func can not only reuse code, but it can give something back
// A variable holds a value

// {} -> called function body
function logger() {
	console.log('My name is Samuel')
}

// Calling / Running / Invoking the function
logger()
logger()
logger()

// apples, oranges -> called parameters. Represent input data. Like empty spaces we fill out later
function fruitProcessor(apples, oranges) {
	const juice = `Juice with ${apples} apples and ${oranges} oranges`
	return juice // result of executing this func
}

// Calling func | Input of function. Called arguments
const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)

console.log(fruitProcessor(5, 0))

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice)

const num = Number('23')

// DRY - Don't repeat yourself

// ====
// Function Declarations vs. Expressions
// ====

// func declaration = using function keyword to declare a func, like declaring a variable
// input is a parameter in this func
//parameter is a bit like local variable available only inside the func
function calcAge1(birthYear) {
	return 2037 - birthYear
}

// argument is the value we use to fill in the placeholder that is the parameter
const age1 = calcAge1(1990)
console.log(age1)

// == function expression - produce values
// basically a func without name (called an anonnymous func)
// It's basically an expression. Remember, expressions produce value
// We use that value and store it in calcAge2, and this will, then, be the func
const calcAge2 = function (birthYear) {
	return 2037 - birthYear
}

const age2 = calcAge2(1990)
console.log(age2)

// Main practical differences func declarations expressions
// we can call func declarations before defining in the code

// which type do i use? personal preference!

// ====
// Arrow Functions
// ====
// Arrow function
// A value assigned to a variable
// Easier and faster to write
// Return happens implicitly, when one-liner-func

// Arrowfunctions don't get a 'this' keyword
const calcAge3 = (birthYear) => 2037 - birthYear

const age3 = calcAge3(1990)
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
	const age = 2037 - birthYear
	const retirement = 65 - age
	// return retirement
	return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1990, 'Samuel'))
console.log(yearsUntilRetirement(1980, 'Bob'))

// ====
// Functions Calling Other Functions
// ====

// It's common to one func to call another func

function cutFruitPieces(fruit) {
	return fruit * 4
}

function fruitProcessor(apples, oranges) {
	const applePieces = cutFruitPieces(apples)
	const orangePieces = cutFruitPieces(oranges)

	const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
	return juice
}

console.log(fruitProcessor(2, 3))

// ====
// Reviewing Functions
// ====
const calcAge = function (birthYear) {
	return 2037 - birthYear
}

const yearsUntilRetirement = function (birthYear, firstName) {
	const age = calcAge(birthYear)
	const retirement = 65 - age

	if (retirement > 0) {
		return retirement
		// return immediatly exits and will not display the clg's
		console.log(`${firstName} retires in ${retirement} years`)
	} else {
		console.log(`${firstName} has already retired 🎉`)
		return -1
	}

	// return retirement
	// return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, 'Samuel'))
console.log(yearsUntilRetirement(1950, 'Mike'))

// Func declaration: func that can be used before it's declared
// Func expression: Essentially a func value stored in a variable
// Arrow func: Great for a quick one-line func. Has no 'this' keyword

// 3 different ways of writing functions, but they all work in a
// similar way: receive input data, transform data, and the output data

// Anatomy of a func
// calcAge -> function name
// birthYear/firstName -> parameters: placeholders to receite input values. Like local variables of a func
function calcAge(birthYear, firstName) {
	// func body: block of code that we want to reuse. Processes the func's input data
	const age = 2037 - birthYear
	console.log(`${firstName} is ${age} years old`)
	// return statement to output a value from the function and terminate execution.
	return age
}
// calling, running or invoking the function, using ()
// 1991/'Samuel' -> arguments: actual values of func parameters, to input data
// age -> variable to save returned value (func output)
const age = calcAge(1991, 'Samuel')
*/

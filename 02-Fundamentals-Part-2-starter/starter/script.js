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

// ====
// Introduction to Arrays
// ====

// () -> parenteses
// [] -> colchetes, parenteses retos
// {} -> chaves, chavetas

// Our first data structure
const friend1 = 'Michael'
const friend2 = 'Steven'
const friend3 = 'Peter'

// Arrays are like a big container that has structure and we can later reference it
// Array and Objects are the 2 biggest data structures ..at least in JS
// more usual to create array this way:
const friends = ['Michael', 'Steven', 'Peter']
console.log(friends)

// another way to create array
const y = new Array(1991, 1984, 2000, 2020)

//Arrays are 0-based - first element is #0
console.log(friends[0])
console.log(friends[2])

// length-> property (not 0-based)
console.log(friends.length)
// get last element of an array
console.log(friends[friends.length - 1])

// Inside [] JS expects an expression, not an statement

friends[2] = 'Jay'
console.log(friends)

// WAIT?! const-variables are changeable???
// actually, only primitive values are immutable
// an array is not a primitive value, so it's mutable
// we CANNOT replace the array with another entirely new one

// Array with different types
const firstName = 'Samuel'
const samuel = [firstName, 'Fuchs', 2037 - 1990, 'teacher', friends]
console.log(samuel)

// Exercise
const calcAge = function (birthYear) {
	return 2037 - birthYear
}

const years = [1990, 1967, 2002, 2010, 2018]
console.log(calcAge(years))

// it's not possible to do: calcAge(years) -> JS doesn't know what to do with it. We get NaN. We cannot do operations with arrays
const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length - 1])
console.log(age1, age2, age3)

// create a new array
const ages = [
	calcAge(years[0]),
	calcAge(years[1]),
	calcAge(years[years.length - 1]),
]
console.log(ages)

// ====
// Basic Array Operations (Methods)
// ====

// Methods are built-in funktions that we can apply
// They are somthing like array operations

const friends = ['Michael', 'Steven', 'Peter']
// push-method: add elements to an array
// push is a function that we call, attached to the friends array
// push actually outputs the new length
const newLength = friends.push('Jay')
console.log(friends)
console.log(newLength)
// unshift adds an element at the beginning of the array
friends.unshift('John')
console.log(friends)
// remove elements
// pop is opposite of push - removes the last element
// no need to insert a value because it deletes the last one
// also outputs something - the deleted items
const popped = friends.pop()
friends.pop()
console.log(friends, popped)
// unshift removes the first element
// once again, it outputs the removed element
friends.shift()
console.log(friends)

// How to know in what position an element is: indexOf()
console.log(friends.indexOf('Steven'))
console.log(friends.indexOf('Bob'))

// to know if an element is in the array, we use includes
// this is an ES6 feature. Outputs true/false

console.log(friends.includes('Steven'))
console.log(friends.includes('Bob'))
// uses strict equality for the check, so it does not do type coersion
friends.push(23)
console.log(friends.includes('23'))
// Good for using in conditionals
if (friends.includes('Steven')) {
	console.log('You have a friend called Steven')
}


// ====
// Introduction to Objects
// ====

// We know, intuitevly, that the first element is firstName, then lastName
const samuelsArray = [
	'Samuel',
	'Fuchs',
	2037 - 1990,
	'teacher',
	['Michael', 'Peter', 'Jay'],
]
// Objects - we define key value pairs
// We use the {} - to define new object
// each key has a value, aka property
// the samuel object has 5 properties

//this is called an object literal (leterally writing down the object content)
const samuel = {
	firstName: 'Samuel',
	lastName: 'Fuchs',
	age: 2037 - 1990,
	job: 'teacher',
	friends: ['Michael', 'Peter', 'Jay'],
}
// Objects are the most fundamental thing in JS
// there are many ways to create an object

// Arrays vs Objects
// Objects - the order does not matter when we want to retrieve them
// Arrays - we access the elements by order number

// Objects for more unstructured data
// Arrays for more ordered data


// ====
// Dot vs. Bracket Notation
// ====
const samuel = {
	firstName: 'Samuel',
	lastName: 'Fuchs',
	age: 2037 - 1990,
	job: 'teacher',
	friends: ['Michael', 'Peter', 'Jay'],
}
console.log(samuel)

// getting a property of an object
// using the dot notation
console.log(samuel.lastName)
// using the bracket notation - ability to do more things
// we can put expressions in the brackets
console.log(samuel['lastName'])

const nameKey = 'Name'
console.log(samuel['first' + nameKey])
console.log(samuel['last' + nameKey])

// console.log(samuel.'last' + nameKey) // not possible

// when to use dot vs brackets
// when we need to first compute something, we use the bracket notation
// the dot notation is cleaner looking and easier to use

// const interestedIn = prompt(
// 	'What do you want to know about Samuel? Choose between firstName, lastName, age, job, and frieds'
// )

// if (samuel[interestedIn]) {
// 	console.log(samuel[interestedIn])
// } else {
// 	console.log(
// 		'Wrong request! Choose between firstName, lastName, age, job, and frieds'
// 	)
// }

// add new property to the object
samuel.location = 'Portugal'
samuel['twitter'] = '@samuelfuchs'
console.log(samuel)

// challenge
// Jonas has 3 friends, and his best friend is called michael.
console.log(
	`${samuel.firstName} has ${samuel.friends.length} friends, and his best friend is called ${samuel.friends[0]}.`
)
// mdn operator precedence


// ====
// Object Methods
// ====

// possible to hold objects inside objects
// function is just a value
const samuel = {
	firstName: 'Samuel',
	lastName: 'Fuchs',
	birthYear: 1990,
	job: 'teacher',
	friends: ['Michael', 'Peter', 'Jay'],
	hasDriversLicense: true,
	// this is a function expression inside an object:
	// Function attached to an object is called a method
	// calcAge: function (birthYear) {
	// 	return 2037 - birthYear
	// },
	// This is a func declaration and it does not work here:
	// function calcAge(birthYear) {
	// 	return 2037 - birthYear
	// }

	// using this keyword to access parameters from within the object
	// calcAge: function () {
	// 	// 'this' is the whole object
	// 	// console.log(this)
	// 	// we don't write 'samuel.birthYear' because that's agains the DRY principle as well. If we were to alter the name of this object, 'samuel.' would not work properly anymore
	// 	return 2037 - this.birthYear
	// },
	calcAge: function () {
		this.age = 2037 - this.birthYear

		return this.age
	},
	getSummary: function () {
		return `${this.firstName} is a ${this.calcAge()}-year old ${
			this.job
		}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
	},
}
// This is not ideal: we infringe the DRY principle
console.log(samuel.calcAge())
// console.log(samuel['calcAge'](1990))

console.log(samuel.age)
console.log(samuel.age)
console.log(samuel.age)

// Challenge
// Jonas is a 46-year old teacher, and he has a (no) driver's license
console.log(samuel.getSummary())


// ====
// Iteration: The for Loop
// ====

// Loops are control structures, like if/else statements
// automate repetetive tasks

// when you go to the gym you do 10 reps of one exercise.

// console.log('Lifting weights repetition 1 🏋️‍♀️')
// For loop - has a counter - has 3 parts
// part 1 - initial value of counter. Use let because it will later be updated by the counter
// part 2 - logical condition that is evaluated before each evaluation of the loop. If condition is true, the loop will run. If it is false, the loop stops
// part 3 - update counter after each iteration
for (let rep = 1; rep <= 10; rep++) {
	console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`)
}
*/

'use strict';
// ===============
// The call and apply Methods
// ===============
//
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // old syntax: book: function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

console.log(lufthansa);

// After some time, Lufthansa created a new airline group:
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// Store the book function in a separate variable
// It's not a method anymore, it's a regular function
const book = lufthansa.book; // is now a regular function call and the 'this' keyword returns undefined

// book(23, 'Sarah WIlliams'); // DOES NOT WORK

// AGAIN: The 'this' keyword depends on how the function is actually called

// CALL METHOD

// tell the 'this' keyword explicitly what to do: call(), apply(), bind()
book.call(eurowings, 23, 'Sarah Williams'); // we call the 'call' method, which calls the book methods with 'this' keyword set to 'eurowings'
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper'); // same with lufthansa obj
console.log(lufthansa);

// another airline: (same procedure)
const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper and David');
console.log(swiss);

// APPLY METHOD
// same as call method, except it does not receive a list of arguments after the 'this' keyword, but takes an array as arguments
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// APPLY method is not that used anymore
// Now we have the spread operator
book.call(swiss, ...flightData);
// ===============
// Functions Returning Functions
// ===============

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('hey');
// greeterHey('Jonas');
// // Closures - one of the most misunderstood things in JS (in later video)

// greet('hello')('Jonas');

// // This is very important for Functional Programming
// // rewritting with arrow func
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// greetArr('hello')('Samuel');

// ===============
// Functions Accepting Callback Functions
// ===============
// Functions that accept other func as input

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order func
// // Funcs have methods and can have properties
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!!', upperFirstWord);
// transformer('JavaScript is the best!!', oneWord);

// const high5 = function () {
//   console.log('🖐');
// };

// // JS uses callbacks all the time
// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5); // 3x 🖐

// WHY USE CALLBACK FUNCTIONS
// 1. It splits up the code into reusable & interconected parts
// 2. Allow to create abstraction
// We hide the detail of some code intempletation because we don't really care about all that detail. Allows to think about problems in a higher more abstract way.
// High-order functinos = high-order of abstraction

// ===============
// First-Class and Higher-Order Functions
// ===============
// FIRST-CLASS FUNCTIONS
// JS treats functions as first-class citizens
// This means that functions are simply values
// Functions are just another "type" of object

// Store functions in variables or properties
// Pass functions as arguments to OTHER functions ( like eventListeners)
// Return functions FROM functions
// Call methos on functions (bind methods, etc)

// HIGHER-ORDER FUNCTIONS
// A function that receives another function as an argument, that returns a new function, or BOTH
// This is only possible because of first-class functions

// 1. Function that receives another function
// EventListeners are Higher-order functions, they get a callback function
// callback func will be called later by the higher-order func (as soon a click happens, for example)

// 2. Function that returns new function
// More advanced and harder to understand

// First-class func vs Higher-order fun
// first-class: feature that a programming language has or not. All that this means is that all functions are values.
// Higher-order: is only possible because JS supports first-class func.

// ===============
// How Passing Arguments Works: Value vs. Reference
// ===============
/*
// Interaction of functions with the same obj can generate problems

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 234556,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 234556) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000);
};

newPassport(jonas);
checkIn(flight, jonas);

// Passing by value vs passing by reference
// Experienced programmers, learning JS, have problemas understanding this
// JS does NOT have passing by reference, ONLY passing by value
// even though it looks that it is passing by reference
*/
// ===============
// Default Parameters
// ===============

// // Set some default parameters:
// const bookings = [];

// // ES6:
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // old way, before es6:
//   //ES6:
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', undefined, 3);

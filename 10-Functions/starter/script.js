'use strict';
// ===============
// How Passing Arguments Works: Value vs. Reference
// ===============

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

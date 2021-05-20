'use strict';

// ==========
// Scoping in Practice
// ==========
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
*/

// ==========
// Hoisting and TDZ in Practice
// ==========
/*
// Hoisting with variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas'; // hoisted to the value of undefined
let job = 'teacher'; // is in the TDZ
const year = 1991; // is in the TDZ

// Hoisting with functions
console.log(addDeclaration(2, 3));
// console.log(addExpression(2, 3)); // is a const variable, too. Is in the TDZ
// console.log(addArrow(2, 3)); // is hoisted as undefined

function addDeclaration(a, b) {
  return a + b;
}

const addExpression = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
// Dangerous and powerful function
if (!numProducts) deleteShoppingCart(); // at this point of the code, numProducts is in fact 'not 10', it's undefined because of hoisting.

var numProducts = 10; // All products will get deleted because of hoisting

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;
*/
// ==========
// The this Keyword in Practice
// ==========
/*
// console.log(this); // window - global scope

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this); // undefined
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  // console.log(this); // uses this of parent func
};
calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // jonas object
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

// method borowing. Copied a func inside an object into another object
matilda.calcAge = jonas.calcAge;
matilda.calcAge(); // matilda calls the method, so matilda will be pointed to with the 'this' keyword

const f = jonas.calcAge;
f();
*/
// ==========
// Regular Functions vs. Arrow Functions
// ==========

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};
jonas.greet();

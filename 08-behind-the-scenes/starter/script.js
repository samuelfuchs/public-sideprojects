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
/*
// this is not a code block:
// it's an object literal
// all of this is in the global scope
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // solution 1
    // before ES6 we used to define the 'this' keyword with self or that
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMillenial();

    // solution 2
    // using an arrow func
    // arrow func uses the 'this' keyword from its parent scope
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};
jonas.greet();
jonas.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

// arguments only exists in regular functions, not in arrow functions. it's not that important anymore
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);

// ==========
// Primitives vs. Objects (Primitive vs. Reference Types)
// ==========

let age = 30;
let oldAge = age; // at this point, age=30
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27; // changes the age of the 'me' object as well
console.log('Friend: ', friend);
console.log('Jonas: ', me);


// ==========
// Primitives vs. Objects in Practice
// ==========
// primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//Reference types
const john = {
  firstName: 'john',
  lastName: 'Williams',
  age: 27,
};

// we are only copying the reference of the object
const marriedJohn = john;
marriedJohn.lastName = 'Davis';
console.log('Before marriage: ', john);
console.log('After marriage: ', marriedJohn);

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// Make a REAL copy
// only works on first level. Inner objects will still be the same
// It's only a shallow copy
// Not a deep clone.
//Both objects have a nested object (family) which point to the same direction in the memory heap
// for deep cloning we usually use external tools like lodash
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

// Family members still get updated equally
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);
*/

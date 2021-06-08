'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// Arrays are also objects
// array methods are functions attached to all arrays in JS
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// slice - take part and create a new array
// does not mutate original
console.log(arr.slice(2));
console.log(arr.slice(2, 4)); // end parameter is not included
console.log(arr.slice(-2)); // will start to copy from the end of the array
console.log(arr.slice(1, -2));
console.log(arr.slice()); // create shallow copy
console.log([...arr]); // other way to create shallow copy

// SPLICE method
// Does mutate, does change the original
// console.log(arr.splice(2));
arr.splice(-1); // delete the last element of array
console.log(arr); // all that remains is: a and b

// REVERSE
// Does mutate, changes original
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

// CONCAT
// Does NOT mutate
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); // same result, doesn't mutate also

// JOIN
console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j

// ==========
// Looping Arrays: forEach
// ==========
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
// in a for of loop, the first parameter is the index, the 2nd is the current array element
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('--- FOREACH ---');
// easier to get current index
// forEach is a higher-order functions which requires a call-back function
// passing in movement, index and array - names do not matter, but the order does!!!
// 1st parameter - current element
// 2nd parameter - current index
// 3rd parameter - intire array we loop over
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(-400)

// WHEN TO USE FOREACH & FOR OF
// One fundamental defference: you cannot break out of a forEach loop
// forEach will always loop over the entire array
// other than that, it comes down to personal preference
*/
// ==========
// forEach With Maps and Sets
// ==========

// // MAP
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // SET
// // doesnt have keys
// // '_' means throwaway, unnacessary
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

// ==========
// Data Transformations: map, filter, reduce
// ==========
// MAP
// Another method to loop over arrays
// similar to forEach, but creates an new array
// map returns a new array containing the results of applying an operation on all original array elements
// current

// FILTER
// Only elements that pass the specification will make it into a new, filtered, array
// filter returns a new array containing the array elements that passed a specified test condition
// current

// REDUCE
// reduce boils ("reduces") all array elements down to one single value (e.g. adding all elements together)
// acc + current

// ==========
// The map Method
// ==========

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// // we use a MAP method to loop over elements and create a new array automatically
// // Direction of functional programming
// // const movementsUSD = movements.map(function (mov) {
// //   return mov * eurToUsd;
// // });

// // some people say, arrow func like this lead to bad readability
// const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// // manually creating an array and pushing elements to it:
// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);

// console.log(movementsUSDfor);

// // it's valid to have multiple return statements in one func as long as only one is being executed
// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementsDescriptions);

// // forEach method creates side effects
// // map did not create side effect in this case

// ==========
// The filter Method
// ==========

// // used to filter an element that satisfy a certain condition
// // with callback func
// const deposits = movements.filter(function (mov, i, arr) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// // Why not use for loops for everything???
// // because JS is pushing more towards functional programming
// // more practical reason: we can actually chain methods together, which is not possible with for loops

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// ==========
// The reduce Method
// ==========

// // boils down all element to one single array
// // gets a callback func as well, BUT IT IS A BIT DIFFERENT than forEach() or map()
// // in the other ones, the first element in the callback func is the current el, the 2nd is the index, 3rd is the entire arr
// // here, the 1st is actually called the accumulater (acc)
// // it's like a snowball that we throw to accumulate everything we want along its way
// // This is the first way to use reduce():
// console.log(movements);
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   return acc + cur;
// });

// // // 2nd way to use reduce(), with an initial acc:
// // const balanceAcc = movements.reduce(function (acc, cur, i, arr) {
// //   console.log(`Iteration ${i}: ${acc}`);
// //   return acc + cur;
// // }, 0); // 0 is the initial value for the first loop iteration
// // =-=-=-=-=-=-=- rewriting the above as an arrow func:
// const balanceAcc = movements.reduce((acc, cur) => acc + cur, 0); // 0 is the initial value for the first loop iteration
// console.log(balanceAcc);

// // If we used a for loop, we always need an external variable to store the result
// let balance2 = 0; // our initial value for the forOf loop, just like the initial acc
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// // get maximum value:
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);

// ==========
// The Magic of Chaining Methods
// ==========

// const eurToUsd = 1.1;
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   // .map(mov => mov * eurToUsd)
//   .map((mov, i, arr) => {
//     // console.log(arr);
//     return mov * eurToUsd;
//   })
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

// ==========
// The find Method
// ==========

// // usually the reason we use this method is to find exactly one element
// // Retrieve an el of an array based on a condition
// // also has callback func
// // Returns only the first array that satisfies the condition
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// // filter vs find:
// // 1st - find only returns the first element that satisfies the condition, filter returns all the elements that match the condition
// // 2nd - filter returns a new arr, while find returns only that el (not an array)

// console.log(accounts);

// // here we get only one account that we specify
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// ==========
// The findIndex  Method
// ==========
// Returns the index of certain element and not the element itself

// findIndex vs indexOf
// indexOf - we can only look for values that are in the array
// findIndex - we can create a more complex condition. Can be anything that returns true or false

// ==========
// some and every
// ==========

// console.log(movements);

// // Checks only for EQUALITY
// console.log(movements.includes(-130));

// // SOME: Checks for CONDITION
// console.log(movements.some(mov => mov === -130)); // is the same as using 'includes'

// const anyDeposits = movements.some(mov => mov > 1500);
// console.log(anyDeposits);

// // EVERY
// // only returns true if ALL of the elements in the array pass the test
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// // Separate callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// ==========
// flat and flatMap
// ==========

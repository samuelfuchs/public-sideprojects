'use strict';

// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // we can do destructuring right away
  // since we did that, we have 4 variable names
  // we get the string based on the values we passed in down below ***
  // as we receive the object passed in we do imediate destructuring
  // the names have to be exactly the same as the ones we pass in
  // we can even specify default vaules!!
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
  // openingHours,
};
// =======================
// Maps: Fundamentals
// =======================

// More useful than sets
// Data structure to map values to keys
// In JS, data is stored in key value pairs.

// keys can have any types.
// objects keys are always strings

const rest = new Map();
rest.set('name', 'Classico Italiano');

/*
// =======================
// Sets
// =======================
// Prior to ES6, we had only Arrays and Objects in JS
// Two more data structures were introduced: sets and maps

// Alread exist in other programming language
// set: collection of unique values.

// We declare set as so: new Set()
// After that we put in an iterable. The most comonly used is array

// 1st: values are unique
// 2nd: order is irrelevant - no indexes

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet); // duplicates are actually gone

console.log(new Set('Jonas'));

console.log(ordersSet.size); // not length
console.log(ordersSet.has('Pizza')); // similar to include-method in arr
console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread'); // adding
ordersSet.add('Garlic Bread'); // basically ignored
ordersSet.delete('Risotto'); // deleting
// ordersSet.clear(); // deleting everithing
console.log(ordersSet);

// If all values are unique and the order doesn't matter, all we have to worry about is wether a value exists or not.
// If the order is important, use an array

// loop over sets
for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// filter out duplicates
// get only the unique items
const staffUnique = [...new Set(staff)]; // If we want it to be an array:
console.log(staffUnique);


// =======================
// Looping Objects: Object Keys, Values, and Entries
// =======================
// Looping through objects (they are not iterables.)

// Looping over property names (keys)

// Prints out how many properties there are!
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
// Get only values of each key
const values = Object.values(openingHours);
console.log(values);

// Entries is names + values
// we already did something similiar in for-of loop

// Entire object
const entries = Object.entries(openingHours);
console.log(entries); // transforms obj into arr

// To get each key and value:
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// =======================
// Optional Chaining (?.)
// =======================
// used comonly to check if a value is there or not
// useful for APIs
// optional chaining - ES2020 feature: if a certain property does not exist, then return undefined imediately
//WITHOUT optional chaining:
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon);
// WITH optional chaining:
// only if the property before the question mark exists, the next will be read from there.
// with nullish value, so 0 and '' are truthy values
console.log(restaurant.openingHours?.mon?.open);

//Example: we want to check if restaurant is open on each day
// nullish + optional chaining
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} , we open at ${open}`);
}

// optional chaining on methods
// check if a method exists before using it.
console.log(restaurant.order?.(0, 1) ?? 'method does not exist');
// This does not exist:
console.log(restaurant.orderRisotto?.(0, 1) ?? 'method does not exist');

// optional chaining on array
// check if an array is empty
const users = [{ name: 'Jonas', email: 'hello@say.com' }];

console.log(users[0]?.name ?? 'User array empty');


// =======================
// Enhanced Object Literals
// =======================

// 'restaurant' is an object literal

// before ES6 we put an object inside an object, putting in
// openingHours: openingHours;
// inside it.
// ES enhanced object literals
// now we only write:
// openingHours,

// BUT, if we were to change the name of the object, we would have to change its name in the 'restaurant' object as well.

// another new feature of ES6 is to ommit the 'function' word when declared inside an object.
// orderDelivery: function ({...})
// becomes:
// orderDelivery({...})

// compute = calculate
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const whenOpen = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0,
    close: 24,
  },
};

// =======================
// Looping Arrays: The for-of Loop
// =======================
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// this is called a for/of loop
// will automatically loop through an array and in each iteration it gives us access to the current array element which we can specify (item)
// the item variable will be the current array element in each iteration.
// no need to write down counter and condition
// still possible to use 'continue' and 'break'
// if we need that index it's actually a bit of a pain: explained below (next example)
// for/of loop was made to just give you the current element

for (const item of menu) console.log(item);

// destructuring
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);


// =======================
// The Nullish Coalescing Operator (??)
// =======================

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10; // 10
console.log(guests);

// Introduced in ES2020
// Nullish values: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

/*
console.log(' -------------- OR --------------');
// && and || for short circutting
// most used to combine boolean values, but we can do a lot more

// ||- OPERATOR
// use ANY data type
// return ANY data type
// short-circutting - if 1st value is truthy, it will immediatly stop

console.log(3 || 'Jonas');
console.log('' || 'jonas'); // jonas ('' is considered falsy)
console.log(true || 0); // first is truthy
console.log(undefined || null); // undefined is falsy and null is also falsy but is last

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // 'Hello' because it is the first truthy value of the operation

// check if numGuests exists, if not, put value to 10
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // 10

restaurant.numGuests = 23;
const guests2 = restaurant.numGuests || 10;
console.log(guests2); // if we comment-out numGuests, the log will output 10, OR if we put numGuests = 0. 0 is a falsy value!!!!

console.log(' -------------- AND --------------');
// AND operator works the same
console.log(0 && 'jonas'); // 0, because 0 is falsy, so it outputs it
console.log(7 && 'jonas'); // when it is truthy, so it continues

console.log('Hello' && 23 && null && 'jonas'); // 'Hello' and 23 are truthy, null is falsy so it stops at null and doesn't even look ate jonas

// Practical example
// first, we check IF it exists
// THEN we execute it!
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// if orderPizza does not exist, it will short-circut out
restaurant.orderPizza && restaurant.orderPizza('cheese', 'mayo');

// DESTRUCTURING

// Rest pattern and parameters
// looks like spread operator but does the oposite
// spread: unpacks an array - on the right hand side of the '=' sign
// rest: pack into an array

const arr = [1, 7, ...[3, 4]];
// Rest, because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1, 2 get output as usual, after that, the rest operator takes the rest and puts them in a new array (others)

// rest does not include any skipped element
// for that reason, it should be the last element.
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// FUNCTIONS
// rest syntax:
// takes multiple values and puts them into an array
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(1, 3, 5, 7, 5, 2);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach'); // mushrooms (seperated) and then an array with the other ings
restaurant.orderPizza('mushrooms'); // mushrooms + []


const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Spread operator
// It's like taking all the elements out of the array and writing them down individually
// We use it when we would otherwise write out each value seperately
// Useful when we use Array Literals and to pass multiple values into functions
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr); // logs individual elements of the array, is the same as writing clg(1, 2, 7, 8, 9)

const newMenu = [...restaurant.mainMenu, 'Gnocci']; // completely new array
console.log(newMenu);

// spread operator takes all the elements from the array and it also doesn't create new variables, as consequence we can only use it in places where we would write values seperated by commas

// Shallow copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays or more
const meu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(meu);

// Spread operator works on all 'iterals'
// iteral: things like arrays, strings, maps, sets - but not objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

// THIS DOES NOT WORK:
// This is a place where JS doesn't expect values seperated by commas.
// console.log(`${...str} Schmedtmann`)

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];
// console.log(ingredients);
// Instead of writing this:
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])
// we can write this:
// restaurant.orderPasta(...ingredients);

// It actually works on objects, even though they are not iterables.
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);


// ***
// this is the object we pass in
// the order is actually not important
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: 'Via del Solll, 21',
  starterIndex: 1,
});

// extracting objects
// order does not matter
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// new variable names:
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// set default values (like in arrays)
// there is no property named 'menu', so we set a default value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables while destructuring
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// Override a & b
// when we initialize a line with '{}', JS expects a code block
// {a, b} = obj
// if we wrap everything in parenteses, we can do it without error
({ a, b } = obj);
console.log(a, b);

// Nested objects - objects inside objects
// we can further destructure objects:
// giving open and close variables diffent names (o and c)
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);


const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// destructuring assignment:
// don't forget to declare the variables with const
const [x, y, z] = arr;
console.log(x, y, z);

// to 'jump' one element and select the next, simply put an empty space:
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// to switch variable before we had to create a temp variable:
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
// Usin destructuring:
// we do not need to use const because we are just reassigning the variables

[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 return values from function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
// nested array-an array inside in an array
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
// giving default values so we don't get undefined
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

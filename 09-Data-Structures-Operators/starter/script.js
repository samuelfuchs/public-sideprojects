'use strict';

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

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

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

/*
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

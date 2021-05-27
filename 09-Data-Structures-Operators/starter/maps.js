'use stict';

// =======================
// Summary: Which Data Structure to Use?
// =======================

// Data structures overview
// Sources of data:
// 1. From the program itself: Data written directly in source code (e.g. messages)
// 2. From the UI: Data input from the user or data written in DOM (e.g. tasks in todo app)
// 3. From external sources: Data fetched for example from web API (e.g. Recipe objects)

// All data must be collected and stored somewhere
// we use data structures to do this!

// Simple List? - Arrays / Sets (we have values without description)
// Key/value pairs? - Objects / Maps (we have a way of describin the pair by using the key)

// Data from external APIs usually comes as JSON wich contains Arrays and Objects

// Other built-in:
// WeakMap & WeakSet

// Non-Built in:
// Staks / Queues / Linked lists / Trees / Hash tables

// ----- Arrays vs Sets -----
// Used for simple lists of values when we do not need to describe them.

// Arrays:
// Use when you need ordered list of values (might contain duplicates)
// Use when you need to manipulate data (because has tons of useful methods)
tasksArr = ['Code', 'Eat', 'Code']; //["Code", "Eat", "Code"]

// Sets:
// Use when you need to work with unique values
// use when high-performance is REALLY important (actions like searching and deleting items can be up to 10x faster than in arrays)
// Use to remove duplicates from arrays
tasksSet = new Set(['Code', 'Eat', 'Code']); // {"Code", "Eat"}

// ----- Objects vs Maps -----
// When we need to describe values using keys.

// Objects:
// More "traditional" key/value store ("abused" objects)
// Easier to write and access values with . and []
// Use when you need to include FUNCTIONS (methods)
// Use when working with JSON (can convert to map)
taskObj = {
  task: 'Code',
  date: 'today',
  repeat: true,
};

// Maps:
// Better performance
// Keys can have ANY data type
// Easy to iterate
// Easy to compute size
// Use when you simply need to map key to values
// Use when you need keys that are NOT strings
taskMap = new Map([
  ['task', 'Code'],
  ['date', 'today'],
  [false, 'Start coding!'],
]);

// =======================
// Maps: Iteration
// =======================
/*
// Another way to populate the map(), without using the set() method.

const question = new Map([
  // first pos: key
  // second pos: value
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

const openingHours = {
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
};

// Convert object to map:
// easy way to convert objects to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// itiration:
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// convert map to arry
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

// =======================
// Maps: Fundamentals
// =======================

// More useful than sets
// Data structure to map values to keys
// In JS, data is stored in key value pairs.

// keys can have any types - can even be objects or keys
// objects keys are always strings

const rest = new Map(); // first create empty map
rest.set('name', 'Classico Italiano'); // pass in arg. 1st is key, similar to add method
rest.set(1, 'Firenze, Italy'); // set() method returns the updated map, which allows us to chain
// console.log(rest.set(2, 'Lisbon, Portugal'));

// chaining:
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

// read data from maps:
// we look for name and get what was assigned with it!
// console.log(rest.get('name'));
// console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));

// Map has methods like set data types
rest.delete(2);
console.log(rest);
// rest.clear();
// console.log(rest.size);

// we can array/ obj as map keys
rest.set([1, 2], 'Test');
console.log(rest);

console.log(rest.get([1, 2])); // this returns undefined, even though we set it 2 lines above.
// in the heap it is not equal
// in order to make it work, we would have to create an arr = [1,2] and then set the arr as value
rest.set(document.querySelector('h1'), 'Heading');
*/

'use stict';
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

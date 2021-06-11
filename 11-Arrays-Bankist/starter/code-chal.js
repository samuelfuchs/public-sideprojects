'use strict';
// ==========
// Coding Challenge #1
// ==========
// Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);

//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   console.log(dogs);
//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy`);
//     }
//   });
// };
// // checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// ==========
// Coding Challenge #2
// ==========

// // 1.
// // Data 1: [5, 2, 4, 1, 15, 8, 3]
// // Data 2: [16, 6, 10, 5, 6, 1, 4]

// // const data1 = [5, 2, 4, 1, 15, 8, 3];

// // const avgHumanAgeMap = data1.map(function (mov, i) {
// //   if (mov <= 2) {
// //     return mov * 2;
// //   } else {
// //     return 16 + mov * 4;
// //   }
// // });
// // console.log(avgHumanAgeMap);
// // // 2.
// // const adultDogs = avgHumanAgeMap.filter(function (mov) {
// //   return mov >= 18;
// // });
// // console.log(adultDogs);

// // // 3.
// // const avgAgeAdult = adultDogs.reduce(function (acc, mov) {
// //   return (acc + mov) / adultDogs.length;
// // }, adultDogs[0]);
// // console.log(avgAgeAdult);

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));

//   const adults = humanAges.filter(age => age >= 18);
//   console.log(humanAges);
//   console.log(adults);

//   //   const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   // different way to calculate avg:
//   const average = adults.reduce(
//     (acc, age, i, arr) => acc + age / arr.length,
//     0
//   );
//   return average;
// };

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

// ==========
// Coding Challenge #3
// ==========

const calcAverageHumanAge2 = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));

  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);

  //   const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  // different way to calculate avg:
  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );
  return average;
};

// dd Odd52

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

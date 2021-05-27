'use strict';

/*const game = {
  team1: 'Bayern Munich',
  team2: 'Borussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
*/
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);
// =====================
// Coding Challenge #3
// =====================

// 1. Create an array 'events' of the different game events that happened (no duplicates)
// const events = new Set(gameEvents.values()); // 1st: Get only the values
const events = [...new Set(gameEvents.values())]; // 2nd: create the spread operator to unpack the set
console.log(events);

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);

// 3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
// Pop takes only the last element
const time = [...gameEvents.keys()].pop(); // The [...xxx] is to create an array

console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF] 17: ⚽ GOAL

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[ ${half} HALF ] ${min}: ${event}`);
}

// =====================
// Coding Challenge #2
// =====================
// // 1.
// for (const [pos, player] of game.scored.entries()) {
//   // console.log(`Goal ${pos + 1}: ${player}`);
// }

// // 2. Destruct game.odds and calculate the avg
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// // 3.
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// const {
//   odds: {
//     team1: chanceToWinTeam1,
//     x: chanceToWinDraw,
//     team2: chanceToWinTeam2,
//   },
//   team1: nameTeam1,
//   team2: nameTeam2,
// } = game;
// console.log(`Odd of victory ${nameTeam1}: ${chanceToWinTeam1}`);
// console.log(`Odd of draw: ${chanceToWinDraw}`);
// console.log(`Odd of victory ${nameTeam2}: ${chanceToWinTeam2}`);

// =====================
// Coding Challenge #1
// =====================
// // 1.
// const [players1, players2] = game.players;
// // console.log(players1, players2);

// // 2
// const [gk, ...fieldPlayers] = players1;
// // console.log(gk, fieldPlayers);

// // 3.
// const allPlayers = [...players1, ...players2];
// // console.log(allPlayers);

// // 4.
// const playersFinal = ['Thiago', 'Coutinho', 'Perisic', ...players1];
// // console.log(playersFinal);

// // 5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6.
// const printGoals = function (numPlayers) {
//   console.log(numPlayers);
// };
// const testData = ['Davies', 'Muller', 'Lewandowski', 'Kimmich'];

// // 7.

const game = {
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
// =====================
// Coding Challenge #2
// =====================
// 1.
for (const [pos, player] of game.scored.entries()) {
  // console.log(`Goal ${pos}: ${player}`);
}

// 2. Destruct game.odds and calculate the avg
const {
  odds: {
    team1: chanceToWinTeam1,
    x: chanceToWinDraw,
    team2: chanceToWinTeam2,
  },
  team1: nameTeam1,
  team2: nameTeam2,
} = game;
console.log((chanceToWinTeam1 + chanceToWinDraw + chanceToWinTeam2) / 3);

// 3.
console.log(`Odd of victory ${nameTeam1}: ${chanceToWinTeam1}`);
console.log(`Odd of draw: ${chanceToWinDraw}`);
console.log(`Odd of victory ${nameTeam2}: ${chanceToWinTeam2}`);

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

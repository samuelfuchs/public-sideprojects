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

// const players1 = game.players[0];
// const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// const players2 = game.players[1];
const [players1, players2] = game.players;
const allPlayers = [...players1, ...players2];

// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;

const testData = ['Davies', 'Muller', 'Lewandowski', 'Kimmich'];

const printGoals = function (score, ...playerNames) {
  console.log(
    `The end result was ${score} and these players made the points: ${playerNames}`
  );
};
printGoals(game.score, testData);
printGoals(game.score, game.scored);

const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1 || team2);
// console.log(players1, players2);
// console.log(allPlayers);
// console.log(playersFinal);
const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;
// console.log(gk1, fieldPlayers1, gk2, fieldPlayers2);

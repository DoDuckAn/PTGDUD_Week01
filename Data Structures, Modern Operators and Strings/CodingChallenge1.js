// Coding Challenge #1
// We're building a football betting app (soccer for my American friends �)!
// Suppose we get data from a web service about a certain game ('game' variable on 
// next page). In this challenge we're gonna work with that data.
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
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
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
    };
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and 
// 'players2')
let players1=game.players[0]
let players2=game.players[1]
// 2. The first player in any player array is the goalkeeper and the others are field 
// players. For Bayern Munich (team 1) create one variable ('gk') with the 
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
// field players
let gk=players1[0]
let fieldPlayers=players1.slice(1,players1.length)
// 3. Create an array 'allPlayers' containing all players of both teams (22 
// players)
let allPlayers=players1.concat(players2)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
// new array ('players1Final') containing all the original team1 players plus 
// 'Thiago', 'Coutinho' and 'Perisic'
let subPlayerS1=['Thiago', 'Coutinho','Perisic']
let players1Final=players1.concat(subPlayerS1)
// 5. Based on the game.odds object, create one variable for each odd (called 
// 'team1', 'draw' and 'team2')
let team1=game.odds.team1
let draw=game.odds.x
let team2=game.odds.team2
// 6. Write a function ('printGoals') that receives an arbitrary number of player 
// names (not an array) and prints each of them to the console, along with the 
// number of goals that were scored in total (number of player names passed in)
function printGoals(...players){
    let totalGoal=0
    console.log(players)
    console.log("total goal: "+game.scored.length)
}
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
// Then, call the function again with players from game.scored
// GOOD LUCK 
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
console.log('---------')
printGoals(...game.scored)
// 7. The team with the lower odd is more likely to win. Print to the console which 
// team is more likely to win, without using an if/else statement or the ternary 
// operator.
game.odds.team1<game.odds.team2 && console.log("team 1 is more likely to win")
game.odds.team1>game.odds.team2 && console.log("team 2 is more likely to win")
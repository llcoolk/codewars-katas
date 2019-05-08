/*
  Title:
    Total amount of points

  Description:
    Our football team finished the championship.
    The result of each match look like "x:y". Results of all matches are recorded in the array.

    For example:
    ["3:1", "2:2", "0:1", ...]

    Write a function that takes such list and counts the points of our team in the championship.

    Rules for counting points for each match:
      if x>y - 3 points
      if x<y - 0 point
      if x=y - 1 point

  Notes:
    there are 10 matches in the championship
    0 <= x <= 4
    0 <= y <= 4

  Kata Link:
    https://www.codewars.com/kata/total-amount-of-points

  Discuss Link:
    https://www.codewars.com/kata/total-amount-of-points/discuss

  Solutions Link:
    https://www.codewars.com/kata/total-amount-of-points/solutions
*/

// Long Solution
/*
const points = games =>
  games.reduce((total, result) => {
    const [x, y] = result.split(':').map(Number)
    if (x > y) return total + 3
    if (x < y) return total
    return total + 1
  }, 0)
*/

// function points(games) {
//   return games.reduce((output,current)=>{
//     let x = parseInt(current[0]);
//     let y = parseInt(current[2]);
//     let value= x>y ? 3 : x===y ? 1 : 0;
//     return output+value;
//   },0)
// }

// function points(games) {
//   return games.reduce((current, element) => {
//     let arraySplit = element.split(':');
//     return (arraySplit[0] > arraySplit[1]) ? current += 3 : (arraySplit[0] < arraySplit[1]) ? current : current += 1;
//   }, 0);
// }

// const points = games => games
//   .map(str => str.split(':').map(Number))      // parse
//   .map(([x, y]) => x > y ? 3 : x < y ? 0 : 1)  // determine points
//   .reduce((sum, points) => sum + points, 0);   // sum points

// function points(games) {
//   var sum=0;
//   for (var i=0; i<games.length; ++i)
//   {
//     if (games[i][0]>games[i][2])
//       sum+=3;
//     if (games[i][0]==games[i][2])
//       sum+=1;
//   }
//   return sum;
// }

// Short Solution
const points = games => games.reduce((total, [x, _, y]) => total + (x > y ? 3 : x === y), 0)

// const points = a => a.reduce((r, e) => {
//   const x = e[0];
//   const y = e[2];
//   return r + (x > y ? 3 : x < y ? 0 : 1);
// }, 0);

// const points=games=>games.reduce((output,current)=>{
//   return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
// },0)

// Function Export
module.exports = points

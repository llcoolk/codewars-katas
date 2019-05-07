// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// function grow(x) {
//   var sum = x.reduce(function(a, b) {
//     return a * b
//   })

//   return sum
// }

const grow = x => x.reduce((a, b) => a * b)

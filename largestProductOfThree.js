/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function (array) {
  array.sort(function (a, b) {
    return b - a;
  });
  var positives = array[0] * array[1] * array[2];
  var withNegatives =
    array[0] * array[array.length - 1] * array[array.length - 2];

  if (positives > withNegatives) {
    return positives;
  } else {
    return withNegatives;
  }
};

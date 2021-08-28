/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 *
 *    @function quicksort
 *    @param {Array<Number>} array
 *    @return {Array<Number>}
 */
var quicksort = function (array) {
  var result = [];
  var left = [];
  var right = [];
  var pivot = Math.floor(array.length / 2);
  if (array.length < 2) {
    return array;
  }
  for (var i = 0; i < array.length; i++) {
    if (i === pivot) {
      continue;
    } else if (array[i] < array[pivot]) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return (result = quickSort(left).concat(array[pivot], quickSort(right)));
};

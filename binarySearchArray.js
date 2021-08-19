/**
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 *
 * @function binarySearchArray
 * @param {Array<Any>} array
 * @param {Array<Any>} target
 * @return {Number}
 */

 const binarySearchArray = function (array, target) {
    var x = Math.ceil(array.length / 2);
    
    if (array.length === 1 && array[0] !== target) {
      return null;
    }
    else if (target === array[x]) {
      return x;
    } 
    else if (target < array[x]) {
      return binarySearchArray(array.slice(0, array.indexOf(x)), target);
    } 
    else if (target > array[x]) {
      return binarySearchArray(array.slice(array.indexOf(x)), target);
    }
};

  
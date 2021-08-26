/**
 * You're given an array every number between 1 and 100,000, except one integer
 * is missing. The numbers are not guaranteed to be consecutive, either! Write a
 * function to detect which number is missing.
 *
 * Extra credit: Refactor your solution to take O(n) time.
 */

var findMissingNumber = function (array) {
  let arr = array.sort((a, b) => {
    return a - b;
  });
  let res = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] != 1) {
      res.push(arr[i - 1] + 1);
    }
  }
  return res;
};

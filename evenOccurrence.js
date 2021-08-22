/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
 */

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
 */

var evenOccurrence = function (arr) {
  var obj = {};
  arr.forEach((value) => {
    if (value % 2 === 0) {
      if (!obj[value]) {
        obj[value] = 1;
      } else if (obj[value] === obj[value]) {
        obj[value] += 1;
      }
    }
  });
  for (var key in obj) {
    if (obj[key] > 1) {
      return Number(key);
      break;
    }
  }
  return null;
};

//// solution 2 :

var evenOccurrence = function (arr) {
  var numbersObj = {};
  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    if (numbersObj[num] === undefined) {
      numbersObj[num] = 1;
    } else {
      numbersObj[num] += 1;
    }
  }
  for (num in numbersObj) {
    if (numbersObj[num] % 2 === 0) {
      return parseInt(num);
    }
  }
};

/**
 * Write a function that, given two objects, returns whether or not the two
 * are deeply equivalent--meaning the structure of the two objects is the
 * same, and so is the structure of each of their corresponding descendants.
 *
 * Examples:
 *
 * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
 * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
 *
 * don't worry about handling cyclical object structures.
 * @function deepEquals
 * @param {Object<any>} apple - first object to compare
 * @param {Object<any>} orange - second object to compare with the first object
 *  @return {boolean}
 */

var deepEquals = function (apple, orange) {
  if (apple === orange) {
    return true;
  }
  if (apple & !orange || orange & !apple) {
    return false;
  }
  if (!(apple instanceof Object) || !(orange instanceof Object)) {
    return false;
  }

  var appleKeys = Object.keys(apple);
  var orangeKeys = Object.keys(orange);
  if (appleKeys.length !== orangeKeys.length) {
    return false;
  }
  if (appleKeys.length === 0) {
    return true;
  }

  for (var i = 0; i < appleKeys.length; i++) {
    var key = appleKeys[i];
    if (!deepEquals(apple[key], orange[key])) {
      return false;
    }
  }

  return true;
};

/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function (str) {
  var result = [""];

  var recurse = function (run, str) {
    for (var i = 0; i < str.length; i++) {
      var set = run.concat(str[i]);
      set = set.split("").sort().join("");
      if (!duplicates(set) && result.indexOf(set) === -1) {
        result.push(set);
        recurse(set, str);
      }
    }
  };

  var duplicates = function (str) {
    var tracker = {};
    for (var i = 0; i < str.length; i++) {
      var letter = str[i];
      if (!tracker[letter]) {
        tracker[letter] = true;
      } else {
        return true;
      }
    }
    return false;
  };

  var str = str.split("").sort().join("") || "";
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    if (letter !== str[i - 1]) {
      result.push(letter);
      recurse(letter, str);
    }
  }
  return result;
};

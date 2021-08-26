/**
 *  Given an arbitrary input string, return the first nonrepeated character in
 *  the string. For example:
 *  firstNonRepeatedCharacter('ABA'); // => 'B'
 *  firstNonRepeatedCharacter('AACBDB'); // => 'C'
 *  Should return null or empty string of there is no repeated characters
 *
 * @function firstNonRepeatedCharacter
 * @param {String} string
 * @returns {String}
 */

var firstNonRepeatedCharacter = function (string) {
  var obj = {};
  for (let i = 0; i < string.length; i++) {
    var letter = string[i];
    if (!obj[letter]) {
      obj[letter] = 1;
    } else {
      obj[letter]++;
    }
  }
  for (letter in obj) {
    if (obj[letter] === 1) {
      return letter;
    }
  }
  return null;
};

/**
 *
 * Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.
 * Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.
 *
 * @function editDistance
 * @param {String} str1
 * @param {String} str2
 * @return
 */

function editDistance(str1, str2) {
  var count = 0;
  var short = str1.length >= str2.length ? str2 : str1;
  var long = str1.length >= str2.length ? str1 : str2;

  for (var i = 0; i < long.length; i++) {
    if (short[i] && short[i] !== long[i]) {
      count++;
    }
  }
  return count;
}

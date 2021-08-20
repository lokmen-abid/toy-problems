/**
 *
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 * Should return null or empty string of there is no commonCharacters
 *
 *
 * Extra credit: Extend your function to handle more than two input strings.
 * @function commonCharacters
 * @param {String} string1 first string
 * @param {String} string2 second string
 * @return {String} common characters
 */

 var commonCharacters = function(string1, string2) {
    var res="" ; 
    for (var i=0 ; i<string1.length ; i++){
          if (string2.includes(string1[i])){
              res=res+string1[i]
        }
      }
   return res ; 
  };
  

//// solution 2 :

var commonCharacters = function(str1, str2) {
    var result = '';
    var str1obj = makeLettersObj(str1);
    var str2obj = makeLettersObj(str2);
    for (var i=0; i<str1.length; i++) {
      var char = str1[i];
      if (str1obj[char] && str2obj[char] && result.indexOf(char) === -1) {
        result += char
      }
    }
    return result;
  }
/**
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
 * @function Array.prototype.isSubsetOf
 * @param {Array} arr - superset array
 * @this {Array} - subset array
 * @return {Boolean} - is subset ?
*/
Array.prototype.isSubsetOf = function (array) {
    return subsetBool(makeWordsObj(this), makeWordsObj(array));
};

var subsetBool = function(subset, set) {
    for (word in subset) {
      if (!set.hasOwnProperty(word)) {return false;}
    }
    return true;
  }
  
var makeWordsObj = function(array) {
    return array.reduce(function(obj, item) {
      obj[item] = true;
      return obj;
    }, {});
}



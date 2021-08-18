/**
 * alphabet Inventory
 * Given an alphabet and a string of text, write a method that tallies the count of each letter defined in said alphabet (case insensitive), then return the result of this tally.
 * alphaCount("aBc", "aabbccdd") // "a:2,b:2,c:2"
 * alphaCount("x", "Racer X is my friend") //	"x:1"
 * alphaCount("123", "o hai") // "no matches"
 *
 * @function alphaCount
 * @param {String} alphabet
 * @param {String} text
 * @return {String}
 *
*/
const alphaCount = (alphabet, text) => {
    var object = {};
	var array = [];
	var x = "no matches"
	alphabet = alphabet.toLowerCase();
	text = text.toLowerCase();
	
	for (var i = 0; i < alphabet.length; i += 1) {
			object[alphabet[i]]=0;
	}
	for (var j = 0; j < text.length; j += 1) {
		if(alphabet.includes(text[j])){
			object[text[j]] += 1;
			}
	 }
	for (var k = 0; k < alphabet.length; k +=1) {
	  if(object[alphabet[k]] > 0) {
      array.push(alphabet[k]+":" + object[alphabet[k]]);
	  }
	}
	if (array[0]===undefined){
	  return x;
	}else{
	array = array.join();
	}
	return array;
};

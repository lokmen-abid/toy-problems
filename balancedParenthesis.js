/**
 * Balanced Parenthesis
 * Given a string, return true if it contains balanced parentheses ().
 * isBalanced("(x + y) - (4)")	// true
 * isBalanced("(((10 ) ()) ((?)(:)))")	// true
 * isBalanced("(50)(")	// false
 * isBalanced("") //	true
 *
 * @function isBalanced
 * @param {String} str
 * @return {Boolean}
*/
const isBalanced = function (str) {
    var arr = str.split("") 
    var obj={}
    if(str.length ===0 ){
        return true ; 
    }
    arr.forEach((key)=>{
        if(key === "("){
            if(!obj[key]){
                obj[key] = 1;
            }else if(obj[key] === obj[key]){
                obj[key] +=1
            }
        }
        else if(key === ")"){
            if(!obj[key]){
                obj[key] = 1;
            }else if(obj[key] === obj[key]){
                obj[key] +=1
            }
        }
    })
    if(obj[`(`] === obj[`)`]){
        return true 
    }
    else {
        return false 
    }
        
};


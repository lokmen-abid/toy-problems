/**
 * Write a function that converts from binary system to the decimal system.
 * the function takes a binary number as string and return the number in decimal system (Number type)
 *
 * @function binaryToDecimal
 * @param {string} binaryString
 * @return {number}
 */
 function binaryToDecimal(binaryString) {
    let res =0 
    let i=0 
    for ( let i=binaryString.length-1 , j=0 ; i>=0 ; i-- , j++){
        if (binaryString[i] === "1") {
            res += (2**j)
        }
    }
    return res 
}


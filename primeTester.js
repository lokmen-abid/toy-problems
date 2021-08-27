/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 *
 * @function primeTester
 * @param {Number} n - number to tested
 * @return {Boolean} - prime or not?
 */

const primeTester = function (n) {
  if (typeof n !== "number" || n < 1 || n % 1 !== 0) {
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }
  else if (n === 1 || n === 2) {
    return true;
  } else {
    for (var i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
};

/**
 * Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 *
 * @function primeSieve
 * @param {Number} start - start of the interval
 * @param {Number} end - end of the interval
 * @return {Array<Number>} - Primes in between
 */
const primeSieve = function (start, end) {
    res = [];
  for (let i = start; i < end; i++) {
    if (primeTester(i)) {
      res.push(i)
    }
  }
  return res;
};

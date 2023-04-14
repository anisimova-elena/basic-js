const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = (n - n % 10) / 10;
  }
  if (sum > 9) return getSumOfDigits(sum);
  else return sum;
}

module.exports = {
  getSumOfDigits
};
getSumOfDigits(91);
getSumOfDigits(100);
getSumOfDigits(35);
getSumOfDigits(99);
getSumOfDigits(123)
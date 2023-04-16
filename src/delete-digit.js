const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let digits = [];
  let res = 0;
  while (n > 0) {
    digits.push(n % 10);
    n = (n - n % 10) / 10;
  }
  let idDeletedDigit = 0;
  for (let i = 0; i < digits.length - 1; i++) {
    if (digits[i] > digits[i + 1]) {
      idDeletedDigit = i + 1;
    }
  }
  digits.splice(idDeletedDigit, 1);
  for (let i = digits.length - 1; i >= 0; i--) {
    res = res * 10 + digits[i];
  }
  return res;
}

module.exports = {
  deleteDigit
};
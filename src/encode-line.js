const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') return '';
  let s = str[0];
  let k = 0;
  let res = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] == s) {
      k++;
    }
    else {
      if (k != 1) { res += k; }
      res += s;
      s = str[i];
      k = 1;
    }
  }
  if (k != 1) { res += k; }
  res += s;
  return res;
}

module.exports = {
  encodeLine
};

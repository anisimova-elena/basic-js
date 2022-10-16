const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, {
  repeatTimes = 1,
  separator = '+',
  addition = '',
  additionRepeatTimes = 1,
  additionSeparator = '|',
}) {
  str += '';
  addition += '';
  let additionString = addition + '';
  for (let k = 1; k < additionRepeatTimes; k++) {
    additionString += additionSeparator + addition; 
  }
let res = str + additionString;
for (let i = 1; i < repeatTimes; i++) {
  res += separator + str + additionString;
}
return res;
}

module.exports = {
  repeater
};

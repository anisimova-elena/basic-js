const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function Validate(arr) {
  let validateArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'string') {
      validateArr.push(arr[i].trim()[0].toUpperCase())
    }
  }
  return validateArr;
}
function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let validateInitials = Validate(members);
    validateInitials.sort();
    validateInitials = validateInitials.join('');
    return validateInitials;
  }
  else return false;
}

module.exports = {
  createDreamTeam
};

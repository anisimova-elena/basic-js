const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  const properties = Object.getOwnPropertyNames(new Date());
  const currProperties = Object.getOwnPropertyNames(date);
  for (let i = 0; i < currProperties.length; i++) {
    if (!properties.includes(currProperties[i])) {
      throw new Error(`Invalid date!`);
    }
  }

  if (date instanceof Date) {
    if (date.getMonth() <= 1 || date.getMonth() == 11) {
      return 'winter';
    }
    if (date.getMonth() <= 4) {
      return 'spring';
    }
    if (date.getMonth() <= 7) {
      return 'summer';
    }
    return 'autumn';
  }
  else throw new Error(`Invalid date!`);
}

module.exports = {
  getSeason
};

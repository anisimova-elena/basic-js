const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  let DNC = {};
let domain = '', finalDomain = '';
function setDNCstat (domain) {
   finalDomain += domain.split("").reverse().join("");
   if (finalDomain in DNC) {
     DNC[finalDomain]++;
   }
   else {
     DNC[finalDomain] = 1;
   }

}
domains.forEach(element => {
  for (let i = element.length - 1; i >= 0; i--) {
    if (element[i] == ".") {
      setDNCstat (domain + element[i]);
      domain = '';
    }
    else {
      domain += element[i];
    }
  }
  setDNCstat(domain + '.');
  domain = '';
  finalDomain = '';
})
  return DNC;
}

module.exports = {
  getDNSStats
};

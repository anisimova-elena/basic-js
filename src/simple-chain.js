const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = '') {
    value += '';
    this.chain.push(`( ${value} )`)
    return this;
  },
  removeLink(pos) {
    pos--;
    try {
      if ((pos > this.getLength() - 1) || (pos < 0) || (typeof pos != 'number') || (Math.ceil(pos) > pos)) {
        throw new Error("You can\'t remove incorrect link!");
      }
      this.chain.splice(pos, 1);
      return this;
    } catch(e) {
      this.chain = [];
    }
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let chainStr = this.chain.join('~~');
    this.chain = [];
    return chainStr;
  }
};

module.exports = {
  chainMaker
};

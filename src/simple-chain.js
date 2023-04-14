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
    if ((pos > this.getLength() - 1) || (pos < 0) || (Number.isNaN(pos))) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(pos, 1);
    return this;
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


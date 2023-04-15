const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }
  checkForThrowingErrors(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
  }
  encrypt(message, key) {
    this.checkForThrowingErrors(message, key);
    let res = '';
    const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; key.length < message.length; i++) {
      key += key[i];
    }
    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, k=0; i < message.length; i++) {
      if (a.includes(message[i])) {
        const shift = (a.indexOf(message[i]) + a.indexOf(key[k])) % 26;
        res += a[shift];
        k++;
      }
      else {
        res += message[i];
      };
    }
    return this.mode ? res : res.split('').reverse().join('');
  }
  decrypt(encryptedMessage, key) {
    this.checkForThrowingErrors(encryptedMessage, key);
    let res = '';
    const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; key.length < encryptedMessage.length; i++) {
      key += key[i];
    }
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, k = 0; i < encryptedMessage.length; i++) {
      if (a.includes(encryptedMessage[i])) {
        const shift = (26 + a.indexOf(encryptedMessage[i]) - a.indexOf(key[k])) % 26;
        res += a[shift];
        k++;
      }
      else {
        res += encryptedMessage[i];
      };
    }
    return this.mode ? res : res.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
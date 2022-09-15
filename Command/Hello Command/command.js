const Receiver = require('./receiver');

class Command {
  /**
   * @protected
   */
  _receiver;

  /**
   * @param {Receiver} receiver
   */
  constructor(receiver) {
    this._receiver = receiver;
  }

  /**
   * @abstract
   */
  execute() {}
}

module.exports = Command;

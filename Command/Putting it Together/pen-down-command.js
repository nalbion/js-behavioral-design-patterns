const Command = require('./command');

class PenDownCommand extends Command {
  /**
   * @type {boolean}
   * @private
   */
  _down;

  /**
   * @param {Receiver} receiver
   * @param {boolean} down
   */
  constructor(receiver, down) {
    super(receiver);
    this._down = down;
  }

  execute() {
    this._receiver.penDown(this._down);
  }
}

module.exports = PenDownCommand;

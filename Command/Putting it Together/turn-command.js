const Command = require('./command');

class TurnCommand extends Command {
  /**
   * @type {'clockwise' || 'anti-clockwise'}
   * @private
   */
  _direction;
  /**
   * @type {number}
   * @private
   */
  _degrees;

  /**
   * @param {Receiver} receiver
   * @param {'clockwise' || 'anti-clockwise'} direction
   * @param {number} degrees
   */
  constructor(receiver, direction, degrees) {
    super(receiver);
    this._direction = direction;
    this._degrees = degrees;
  }

  execute() {
    this._receiver.turn(this._degrees * (this._direction.startsWith('anti') ? 1 : -1));
  }
}

module.exports = TurnCommand;

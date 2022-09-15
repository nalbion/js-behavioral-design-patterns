const Command = require('./command');

class MoveCommand extends Command {
  /**
   * @type {'forward' | 'reverse' | 'absolute' | 'relative'}
   * @private
   */
  _direction;
  /**
   * @type {number}
   * @private
   */
  _amount;
  _x;
  _y;

  /**
   * @param {Receiver} receiver
   * @param {'forward' | 'reverse' | 'absolute' | 'relative'} direction
   * @param {number} amount
   */
  constructor(receiver, direction, amount, x, y) {
    super(receiver);
    this._direction = direction;
    this._amount = amount;
    this._x = x;
    this._y = y;
  }

  execute() {
    if (this._x && this._y) {
      if (this._direction === 'absolute') {
        this._receiver.moveTo(this._x, this._y);
      } else {
        this._receiver.moveBy(this._x, this._y);
      }
    } else {
      this._receiver.move(this._amount * ('reverse' === this._direction ? -1 : 1));
    }
  }
}

module.exports = MoveCommand;

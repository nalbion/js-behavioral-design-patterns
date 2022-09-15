const Command = require('./command');

class ColorCommand extends Command {
  /**
   * @type {string}
   * @private
   */
  _color;

  /**
   * @param {Receiver} receiver
   * @param {string} color
   */
  constructor(receiver, color) {
    super(receiver);
    this._color = color;
  }

  execute() {
    this._receiver.setColor(this._color);
  }
}

module.exports = ColorCommand;

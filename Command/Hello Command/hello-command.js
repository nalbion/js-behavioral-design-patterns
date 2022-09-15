const Command = require('./command')

class HelloCommand extends Command {
    /**
     * @type {string}
     * @private
     */
    _name;

    /**
     * @param {Receiver} receiver
     * @param {string} name
     */
    constructor(receiver, name) {
        super(receiver);
        this._name = name;
    }

    execute() {
        return this._receiver.onSuccess(`Hello ${this._name}!`);
    }
}
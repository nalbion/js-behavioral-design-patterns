const Receiver = require('./receiver');
const MoveCommand = require('./move-command');
const TurnCommand = require('./turn-command');
const PenDownCommand = require('./pen-down-command');
const ColorCommand = require('./color-command');

const receiver = new Receiver();

/**
 * @param {Request} request
 * @returns {Response}
 */
function handler(request) {
    const url = new URL(request.url);

    if ('GET' === request.method && url.pathname === '/api/svg') {
        return { status: 200, body: receiver.generateSvg('test') }
    }

    if ('POST' === request.method || 'PATCH' === request.method) {
        let command = commandFromRequest(url);
        if (command) {
            return command.execute();
        }
    }

    return { status: 404, body: 'Not Found' };
}

const ACTION_REGEX = new RegExp('^/api/(move|turn|pen|color)');

/**
 * @param {URL} url
 * @returns {Command || undefined}
 */
function commandFromRequest(url) {
    const match = ACTION_REGEX.exec(url.pathname);
    if (match) {
        const action = match[1];
        switch (action) {
            case 'move':
                const amount = url.searchParams.get('amount');
                if (amount) {
                    return new MoveCommand(receiver, url.searchParams.get('direction'), parseInt(url.searchParams.get('amount')));
                } else {
                    return new MoveCommand(receiver, url.searchParams.get('direction'), null, parseInt(url.searchParams.get('x')), parseInt(url.searchParams.get('y')));
                }
            case 'turn':
                return new TurnCommand(receiver, url.searchParams.get('direction'), parseInt(url.searchParams.get('amount')));
            case 'pen':
                const color = url.searchParams.get('color');
                if (color) {
                    return new ColorCommand(receiver, color);
                }
                return new PenDownCommand(receiver, !!url.searchParams.get('down'));
        }
    }
}

module.exports = handler;

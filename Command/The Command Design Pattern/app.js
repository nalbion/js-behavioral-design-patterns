const Receiver = require('./receiver');

const receiver = new Receiver();

/**
 * @param {Request} request
 * @returns {Response}
 */
function handler(request) {
    let command = commandFromRequest(request);
    if (command) {
        return command.execute();
    }

    return { status: 404, body: 'Not Found' };
}

const ACTION_REGEX = new RegExp('^/api/(move|turn|action)/(\\w+)/(\\d+)$');

/**
 * @param {Request} request
 * @returns {Command || undefined}
 */
function commandFromRequest(request) {
    const url = new URL(request.url);

    if ('POST' == request.method) {
        const match = ACTION_REGEX.exec(url.pathname);
        if (match) {
            const [_, action, direction, amount] = match;
            switch (action) {
                case 'move':
                    return new MoveCommand(receiver, direction, amount);
                case 'turn':
                    return new TurnCommand(receiver, direction, amount);
                case 'action':
                    return new ActionCommand(receiver, direction, amount);
            }

            switch (request.method) {
                case 'GET':
                    return new GetRecordCommand(receiver, match[1]);
                case 'POST':
                    return new AddRecordCommand(receiver, match[1], request.body);
            }
        }
    }
}

module.exports = handler;

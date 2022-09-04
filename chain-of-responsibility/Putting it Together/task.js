const ApiHandler = require('./api-handler');
const AuthHandler = require('./auth-handler');
const ContentHandler = require('./content-handler');
const ErrorHandler = require('./error-handler');

const chain = createHandlerChain();

/**
 * @param {Request} request
 * @returns {Response}
 */
function handler(request) {
    return chain.handle(request);
}

function createHandlerChain() {
    const apiHandler = new ApiHandler();
    const authHandler = new AuthHandler();
    const contentHandler = new ContentHandler();
    const errorHandler = new ErrorHandler();

    errorHandler.setNext(contentHandler);
    contentHandler.setNext(authHandler);
    authHandler.setNext(apiHandler);

    return errorHandler;
}

module.exports = handler;

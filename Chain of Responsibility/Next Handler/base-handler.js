const Handler = require('./handler');

/**
 * @extends Handler
 */
class BaseHandler extends Handler {
    /**
     * @type {Handler}
     * @private
     */
    _next;

    /**
     * @param {Request} request
     * @return {Response}
     * @override
     */
    handle(request) {
        if (this._next) {
            return this._next.handle(request);
        }
        return { status: 404, body: 'Not Found' };
    }

    /**
     * @param {Handler} handler
     * @override
     */
    setNext(handler) {
        this._next = handler;
    }
}

module.exports = BaseHandler;

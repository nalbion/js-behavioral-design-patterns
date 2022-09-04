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
     * @param {Request} request
     * @override
     */
    setNext(next) {
        this._next = next;
    }
}

module.exports = BaseHandler;

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
     */
    handle(request) {
        if (this._next) {
            const response = this._next.handle(request);
            if (response) {
                return response;
            }
        }
        return { status: 404, body: 'Not Found' };
    }

    setNext(next) {
        this._next = next;
    }
}

module.exports = BaseHandler;

const Handler = require('./handler');

/**
 * @extends Handler
 */
class BaseHandler extends Handler {
    /**
     * @param {Request} request
     * @return {Response}
     * @override
     */
    handle(request) {
        return { status: 404, body: 'Not Found' };
    }
}

module.exports = BaseHandler;

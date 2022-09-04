const BaseHandler = require('./base-handler');

class ErrorHandler extends BaseHandler {
    /**
     * @param {Request} request
     * @return {Response}
     * @override
     */
    handle(request) {
        let response;

        try {
            response = super.handle(request);

            if (!response) {
                response = { status: 404, body: 'Not Found' };
            }
        } catch (err) {
            if (err.status) {
                response = err;
            } else if (err === 'Unauthorized') {
                response = { status: 401, body: 'Unauthorized' };
            } else {
                response = { status: 500, body: err.message || 'Internal Server Error' };
            }
        }

        return response;
    }
}

module.exports = ErrorHandler;

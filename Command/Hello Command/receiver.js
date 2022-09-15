class Receiver {
    // Command { type: '', payload: {}, error: '' }

    /**
     * @param {string} body
     * @returns {Response}
     */
    onSuccess(body) {
        return { status: 200, body };
    }

    /**
     * @param {number} status - the HTTP Status code for the error
     * @param {string} body
     * @returns {Response}
     */
    onError(status, body) {
        return { status, body };
    }
}

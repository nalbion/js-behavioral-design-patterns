const BaseHandler = require('./base-handler');

class AuthHandler extends BaseHandler {
  /**
   * @param {Request} request
   * @return {Response | null}
   * @override
   */
  handle(request) {
    const path = new URL(request.url).pathname;

    if (path.startsWith('/api')) {
      if (request.method === 'POST') {
        if (path.startsWith('/api/auth/login')) {
          return this._login(request);
        } else if (path.startsWith('/api/auth/sign-up')) {
          return this._signup(request);
        }
      }

      if (!this._isAuthorized(request)) {
        throw 'Unauthorized';
      }
    }
    return super.handle(request);
  }

  /**
   * @param {Request} request
   * @returns {boolean}
   * @private
   */
  _isAuthorized(request) {
    return !!request.headers['Authorization'];
  }

  _login(request) {
    return { status: 200, body: 'OK' }
  }

  _signup(request) {
    return { status: 200, body: 'OK' }
  }
}

module.exports = AuthHandler;

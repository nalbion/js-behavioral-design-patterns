const BaseHandler = require('./base-handler');

class ApiHandler extends BaseHandler {
  /**
   * @param {Request} request
   * @return {Response}
   * @override
   */
  handle(request) {
    const url = new URL(request.url);

    if (url.pathname === '/api/hello') {
      if (request.method !== 'GET') {
        throw { status: 405, body: 'Method Not Allowed' };
      }

      const name = url.searchParams.get('name');

      if (!name) {
        throw { status: 400, body: 'name is required' };
      }

      return { status: 200, body: `Hello ${name}!` };
    }

    return super.handle(request);
  }
}

module.exports = ApiHandler;

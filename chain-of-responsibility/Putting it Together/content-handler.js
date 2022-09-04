const BaseHandler = require('./base-handler');

const files = {
  '/index.html': '<html><script src="app.js"/>Hello World!</html>',
  '/app.js': `console.info('hello console');`
};

class ContentHandler extends BaseHandler {
  /**
   * @param {Request} request
   * @return {Response}
   * @override
   */
  handle(request) {
    const file = files[new URL(request.url).pathname];

    if (file) {
      return { status: 200, body: file };
    }
    return super.handle(request);
  }
}

module.exports = ContentHandler;

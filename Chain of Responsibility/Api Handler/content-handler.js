const BaseHandler = require('./base-handler');

class ContentHandler extends BaseHandler {
  /**
   * @param {Request} request
   * @return {Response}
   * @override
   */
  handle(request) {
    const file = this.readFile(new URL(request.url).pathname);
    if (file) {
      return { status: 200, body: file };
    }
    return super.handle(request);
  }

  /**
   * @param {string} path
   * @returns {string | undefined}
   * @private
   */
  _readFile(path) {
    const files = {
      '/index.html': '<html><script src="app.js"/>Hello World!</html>',
      '/app.js': `console.info('hello console');`
    };

    return files[path];
  }
}

module.exports = ContentHandler;

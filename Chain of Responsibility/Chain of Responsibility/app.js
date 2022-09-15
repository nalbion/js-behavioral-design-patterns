/**
 * @param {Request} request
 * @returns {Response}
 */
function app(request) {
  return { status: 200, body: 'Hello World!' };
}

module.exports = app;

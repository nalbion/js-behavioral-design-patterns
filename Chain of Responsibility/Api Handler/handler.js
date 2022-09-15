class Handler {
  /**
   * @abstract
   * @param {Request} request
   * @return {Response}
   */
  handle(request) {}

  /**
   * @abstract
   * @param {Handler} handler
   */
  setNext(handler) {}
}

module.exports = Handler;

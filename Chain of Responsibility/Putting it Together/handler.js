class Handler {
  /**
   * @abstract
   * @param {Request} request
   * @return {Response}
   */
  handle(request) {}

  /**
   * @abstract
   * @param {Handler} next
   */
  setNext(next) {}
}

module.exports = Handler;

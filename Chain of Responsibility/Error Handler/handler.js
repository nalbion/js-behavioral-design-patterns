class Handler {
  /**
   * @abstract
   * @param {Request} request
   * @return {Response | null}
   */
  handle(request) {}

  /**
   * @abstract
   * @param {Handler} next
   */
  setNext(next) {}
}

module.exports = Handler;

const BaseHandler = require('../base-handler');

test('defaults to 404', () => {
    const request = { method: 'GET', url: 'https://example.com' };

    const handler = new BaseHandler();
    expect(handler.handle(request)).toEqual({ status: 404, body: 'Not Found' });
});

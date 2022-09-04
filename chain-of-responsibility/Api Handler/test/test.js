const ApiHandler = require("../api-handler");
const ContentHandler = require("../content-handler");

test('handler responds with 200', () => {
    const request = { method: 'GET', url: 'https://example.com/api/hello?name=World' };

    const handler = new ApiHandler();

    expect(handler.handle(request)).toEqual({ status: 200, body: 'Hello World!' });
});

test('handler responds with 200 for another name', () => {
    const request = { method: 'GET', url: 'https://example.com/api/hello?name=User' };

    const handler = new ApiHandler();

    expect(handler.handle(request)).toEqual({ status: 200, body: 'Hello User!' });
});

test('handler responds with 400', () => {
    const request = { method: 'GET', url: 'https://example.com/api/hello' };

    const handler = new ApiHandler();

    expect.assertions(1);
    try {
        throw handler.handle(request);
    } catch (err) {
        expect(err).toEqual({ status: 400, body: 'name is required' });
    }
});

test('handler responds with 405', () => {
    const request = { method: 'POST', url: 'https://example.com/api/hello?name=World' };

    const handler = new ApiHandler();

    expect.assertions(1);
    try {
        throw handler.handle(request);
    } catch (err) {
        expect(err).toEqual({ status: 405, body: 'Method Not Allowed' });
    }
});

test('still gives 200', () => {
    const request = { method: 'GET', url: 'https://example.com/index.html' };

    const handler = new ApiHandler();
    const contentHandler = new ContentHandler();
    handler.setNext(contentHandler);

    expect(handler.handle(request)).toEqual({ status: 200, body: '<html><script src="app.js"/>Hello World!</html>' });
});

test('still gives 404', () => {
    const request = { method: 'GET', url: 'https://example.com/not-found.html' };

    const handler = new ApiHandler();
    const contentHandler = new ContentHandler();
    handler.setNext(contentHandler);

    expect(handler.handle(request)).toEqual({ status: 404, body: 'Not Found' });
});

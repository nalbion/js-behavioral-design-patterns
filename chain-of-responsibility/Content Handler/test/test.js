const BaseHandler = require('../base-handler');
const ContentHandler = require('../content-handler');

test('handler responds with index.html', () => {
    const request = { method: 'GET', url: 'https://example.com/index.html' };

    const handler = new ContentHandler();

    expect(handler.handle(request)).toEqual({ status: 200, body: `<html><script src="app.js"/>Hello World!</html>` });
});

test('handler responds with app.js', () => {
    const request = { method: 'GET', url: 'https://example.com/app.js' };

    const handler = new ContentHandler();

    expect(handler.handle(request)).toEqual({ status: 200, body: `console.info('hello console');` });
});

test('still gives 404', () => {
    const request = { method: 'GET', url: 'https://example.com/not-found.html' };

    const handler = new BaseHandler();
    const contentHandler = new ContentHandler();
    handler.setNext(contentHandler);

    expect(handler.handle(request)).toEqual({ status: 404, body: 'Not Found' });
});

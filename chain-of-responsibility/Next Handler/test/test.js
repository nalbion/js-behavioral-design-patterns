const BaseHandler = require('../base-handler');

class TestHandler extends BaseHandler {
    handle(request) {
        return { status: 202, body: 'Test' };
    }
}

function readFile(f) {
    const path = require("path");
    const fs = require("fs");
    return fs.readFileSync(path.join(__dirname, "..",  f)).toString();
}

test('still returns 404 if no next handler', () => {
    const request = { method: 'GET', url: 'https://example.com' };

    const handler = new BaseHandler();

    expect(handler.handle(request)).toEqual({ status: 404, body: 'Not Found' });
});

test('passes request to next handler', () => {
    const request = { method: 'GET', url: 'https://example.com' };

    const handler = new BaseHandler();
    const testHandler = new TestHandler();
    handler.setNext(testHandler);

    expect(handler.handle(request)).toEqual({ status: 202, body: 'Test' });
});

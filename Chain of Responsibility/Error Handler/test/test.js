const AuthHandler = require('../auth-handler');
const BaseHandler = require('../base-handler');
const ContentHandler = require('../content-handler');
const ErrorHandler = require('../error-handler');

class ApiHandler extends BaseHandler {
    handle(request) {
        return { status: 200, body: 'OK' };
    }
}

class UselessHandler extends BaseHandler {
    handle(request) {
        return null;
    }
}

class TeapotHandler extends BaseHandler {
    handle(request) {
        throw { status: 418, body: `I'm a Teapot` };
    }
}

class BadHandler extends BaseHandler {
    handle(request) {
        throw new Error('Unhandled error');
    }
}

class BadHandler2 extends BaseHandler {
    handle(request) {
        throw {};
    }
}

test('handler responds with 200', () => {
    const request = { method: 'POST', url: 'https://example.com/api/auth/login' };

    const handler = new ErrorHandler();
    handler.setNext(new ApiHandler());

    expect(handler.handle(request)).toEqual({ status: 200, body: 'OK' });
});

test('handler responds with 401', () => {
    const request = {
        method: 'GET',
        url: 'https://example.com/api/protected',
        headers: {}
    };

    const handler = new ErrorHandler();
    handler.setNext(new AuthHandler());

    expect(handler.handle(request)).toEqual({ status: 401, body: 'Unauthorized' });
});


test('handler responds with 404', () => {
    const request = { method: 'GET', url: 'https://example.com/test.html' };

    const handler = new ErrorHandler();
    handler.setNext(new UselessHandler());

    expect(handler.handle(request)).toEqual({ status: 404, body: `Not Found` });
});

test('handler responds with 418', () => {
    const request = { method: 'GET', url: 'https://example.com/teapot' };

    const handler = new ErrorHandler();
    handler.setNext(new TeapotHandler());

    expect(handler.handle(request)).toEqual({ status: 418, body: `I'm a Teapot` });
});

test('handler responds with 500', () => {
    const request = { method: 'GET', url: 'https://example.com/unhandled' };

    const handler = new ErrorHandler();
    handler.setNext(new BadHandler());

    expect(handler.handle(request)).toEqual({ status: 500, body: 'Unhandled error' });
});

test('handler responds with 500 and default message', () => {
    const request = { method: 'GET', url: 'https://example.com/unhandled' };

    const handler = new ErrorHandler();
    handler.setNext(new BadHandler2());

    expect(handler.handle(request)).toEqual({ status: 500, body: 'Internal Server Error' });
});


test('handler responds with app.js', () => {
    const request = { method: 'GET', url: 'https://example.com/app.js' };

    const handler = new ErrorHandler();
    handler.setNext(new ContentHandler());

    expect(handler.handle(request)).toEqual({ status: 200, body: `console.info('hello console');` });
});

test('still gives 404', () => {
    const request = { method: 'GET', url: 'https://example.com/not-found.html' };

    const handler = new ErrorHandler();
    handler.setNext(new ContentHandler());

    expect(handler.handle(request)).toEqual({ status: 404, body: 'Not Found' });
});

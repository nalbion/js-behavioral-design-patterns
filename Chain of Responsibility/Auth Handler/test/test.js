const ApiHandler = require('../api-handler');
const AuthHandler = require('../auth-handler');

test('handler responds with 200', () => {
    const request = {
        method: 'GET',
        url: 'https://example.com/api/hello?name=World',
        headers: { 'Authorization': 'Bearer Test' }
    };

    const handler = new AuthHandler();
    handler.setNext(new ApiHandler());

    expect(handler.handle(request)).toEqual({ status: 200, body: 'Hello World!' });
});

test('Unauthorized API', () => {
    const request = {
        method: 'GET',
        url: 'https://example.com/api/hello?name=Name',
        headers: {}
    };

    const handler = new AuthHandler();
    handler.setNext(new ApiHandler());

    expect(() => handler.handle(request)).toThrow('Unauthorized');
});

test('Login', () => {
    const request = {
        method: 'POST',
        url: 'https://example.com/api/auth/login',
        headers: {}
    };

    const handler = new AuthHandler();
    handler.setNext(new ApiHandler());

    expect(handler.handle(request)).toEqual({ status: 200, body: 'OK' });
});

test('Logout', () => {
    const request = {
        method: 'POST',
        url: 'https://example.com/api/auth/logout',
        headers: {}
    };

    const handler = new AuthHandler();
    handler.setNext(new ApiHandler());

    expect(() => handler.handle(request)).toThrow('Unauthorized');
});

test('Sign Up', () => {
    const request = {
        method: 'POST',
        url: 'https://example.com/api/auth/sign-up',
        headers: {}
    };

    const handler = new AuthHandler();
    handler.setNext(new ApiHandler());

    expect(handler.handle(request)).toEqual({ status: 200, body: 'OK' });
});

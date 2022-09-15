const handler = require('../task');

test('index.html', () => {
    const request = {
        url: 'https://example.com/index.html'
    };

    const response = handler(request);

    expect(response).toEqual({ status: 200, body: `<html><script src="app.js"/>Hello World!</html>` });
});

test('404', () => {
    const request = {
        url: 'https://example.com/not-found.html'
    };

    const response = handler(request);

    expect(response).toEqual({ status: 404, body: 'Not Found' });
});

test('Hello Name', () => {
    const request = {
        method: 'GET',
        url: 'https://example.com/api/hello?name=Name',
        headers: { 'Authorization': 'Bearer Test' }
    };

    const response = handler(request);

    expect(response).toEqual({ status: 200, body: 'Hello Name!' });
});

test('POST Hello Name', () => {
    const request = {
        method: 'POST',
        url: 'https://example.com/api/hello?name=Name',
        headers: { 'Authorization': 'Bearer Test' }
    };

    const response = handler(request);

    expect(response).toEqual({ status: 405, body: 'Method Not Allowed' });
});

test('Unauthorized API', () => {
    const request = {
        method: 'GET',
        url: 'https://example.com/api/hello?name=Name',
        headers: {}
    };

    const response = handler(request);

    expect(response).toEqual({ status: 401, body: 'Unauthorized' });
});

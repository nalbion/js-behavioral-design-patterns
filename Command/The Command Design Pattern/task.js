const handler = require('./app');

console.info(handler({ method: 'POST', url: 'https://example.com/api/hello?name=World' }));

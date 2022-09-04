function readFile(f) {
    const path = require("path");
    const fs = require("fs");
    return fs.readFileSync(path.join(__dirname, "..",  f)).toString();
}

test('Handler class created', () => {
    const file = readFile('handler.js');
    if (!file.includes('class Handler {')) {
        throw 'You need to create a <code>Handler</code> class';
    }
    if (!file.replace(/\s/g, '').match(/.*handle\(request\){}/)) {
        throw 'The Handler class must define an abstract <code>handle</code> method which takes a <code>request</code> parameter';
    }
});

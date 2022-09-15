function readFile(f) {
    const path = require("path");
    const fs = require("fs");
    return fs.readFileSync(path.join(__dirname, "..",  f)).toString();
}

test('Handler class created', () => {
    const file = readFile('command.js');
    if (!file.includes('class Command {')) {
        throw 'You need to create a <code>Command</code> class';
    }
    if (!file.replace(/\s/g, '').match(/.*execute\(request\){}/)) {
        throw 'The Command class must define an abstract <code>execute</code> method which takes a <code>request</code> parameter';
    }
});

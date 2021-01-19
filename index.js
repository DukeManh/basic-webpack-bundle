const path = require('path');
window.onload = function () {
    console.log('What a lovely day');
    console.log('Current dir is', path.resolve(process.cwd()));
}
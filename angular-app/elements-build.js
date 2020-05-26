const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/angular-app/runtime-es2015.js',
        './dist/angular-app/polyfills-es2015.js',
        './dist/angular-app/main-es2015.js',
    ]
    await fs.ensureDir('elements')
    await concat(files, 'elements/angularApp.js');
    await fs.copyFile('./dist/angular-app/styles.css', 'elements/styles.css')
    // await fs.copy('./dist/angular-app/assets/', 'elements/assets/' )
    
})()
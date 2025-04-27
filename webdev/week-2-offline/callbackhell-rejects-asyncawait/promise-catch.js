const fs = require('fs');

function promisifiedReadFile() {
    return new Promise(function (resolve, reject) {
        fs.readFile('a.txt', 'utf-8', function (err, data) {
            console.log("file contents...");
            if (err) {
                reject(err)
            } else {
                resolve();
            }
        });
    })
}

promisifiedReadFile().then(() => console.log("file read")).catch((err) => console.log("Error reading file" + err));
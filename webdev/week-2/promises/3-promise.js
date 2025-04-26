//Promise - an alternative to callback for a cleaner syntax
// function setTimeoutPromisified(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// function callback() {
//     console.log("3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(callback)

//callback gets called when the first arg of random is called. i.e., resolve()
// function random(resolve) {
//     setTimeout(function () {
//         resolve()
//     }, 3000)
// }

// function callback() {
//     console.log('callback called');
// }
// let p = new Promise(random).then(callback);
// console.log(p);

//Normal version of read file
// const fs = require('fs');
// let file = fs.readFileSync('a.txt', 'utf-8');
// console.log(file)

//Promisified version of read file
const fs = require('fs')

function readFilePromisified(file) {
    function fileRead(resolve) {
        let fileContent = fs.readFileSync(file, 'utf-8');
        console.log(fileContent)
        resolve()
    }
    return new Promise(fileRead)
}

function callback() {
    console.log('File read completed')
}

readFilePromisified('a.txt').then(callback);


//My own implementation of Promise class

class MyPromise {
    constructor(fn) {
        function afterDone() {
            this.resolve();
        }
        fn(afterDone);
    }

    then(callback) {
        this.resolve = callback
    }

}


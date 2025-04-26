// function sum(a, b) {
//     return parseInt(a) + parseInt(b);
// }

// let add = sum("20", 30);

// console.log(add);

//sum of n nubers
// function sum(n) {
//     let add = 0;
//     for (let i = 1; i <= n; i++) {
//         add = add + i;
//     }
//     return add;
// }
// let addition = sum(3);
// console.log(addition);

//file read
// const fs = require('fs')
// let fileContent = fs.readFileSync('a.txt', 'utf-8');
// console.log(fileContent);

//Functional Arguments
// function sum(a, b) {
//     return a + b;
// }

// function result(a, b, op) {
//     return op(a, b);
// }
// let ans = result(2, 3, sum);
// console.log(ans);

//callbacks
// const fs = require('fs')
// function print(err, data) {
//     if (err) {
//         console.log(err)
//     }
//     console.log(data);
// }
// fs.readFile('a.txt', 'utf-8', print)
// console.log('Done!')

//setTimeout callback
const fs = require('fs')
function print() {
    console.log('print Hello')
}
setTimeout(print, 5000);
console.log('Done');

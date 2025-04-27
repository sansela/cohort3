function promisifiedSetTimeout(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms)
    })
}

async function solve() {
    await promisifiedSetTimeout(1000);
    console.log("Hi");
    await promisifiedSetTimeout(3000);
    console.log("Hello");
    await promisifiedSetTimeout(5000);
    console.log("Hi, there");
}

solve();

console.log("After the solve function");
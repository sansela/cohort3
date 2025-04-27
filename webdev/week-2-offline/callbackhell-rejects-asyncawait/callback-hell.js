function promisifiedSetTimeout(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms)
    })
}

function callback() {
    console.log("Hi")
}
promisifiedSetTimeout(1000).then(function () {
    console.log("hi");
    return promisifiedSetTimeout(3000)
}).then(function () {
    console.log("Hello");
    return promisifiedSetTimeout(5000)
}).then(function () {
    console.log("Hi, there");
});
const express = require('express')
const app = express();

app.get("/", function (req, res) {
    res.send('Hello World!')
})

app.get('/asd', (req, res) => {
    res.send('Hello world from asd')
})

app.post('/', (req, res) => {
    res.send('Hello world from POST')
})

app.listen(3000)
const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

let totalRequests = 0

function requestCounter(req, res, next) {
    console.log('Total Request:' + ++totalRequests)
    console.log('Method:', req.method)
    console.log('Host name:', req.hostname)
    console.log('URL:', req.url)
    console.log('time:', new Date())
    if (req.query.a == 1) {
        next()
    } else {
        res.json({
            message: "Request stopped before reaching destination"
        })
    }


}

app.get('/sum', requestCounter, (req, res) => {
    let a = req.query.a
    let b = req.query.b
    let sum = parseInt(a) + parseInt(b)
    res.json({
        sum: sum
    })
})

app.post('/multiply', (req, res) => {
    let a = req.body.a
    let b = req.body.b
    res.json({

        "multiplication": a * b
    }
    )
})
app.listen(3000)
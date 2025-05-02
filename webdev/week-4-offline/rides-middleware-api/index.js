const express = require('express')
const app = express()

function eligibility(req, res, next) {
    let age = req.query.age;
    console.log('age', age)

    if (age == undefined || parseInt(age) < 10) {
        return res.send({
            message: "You are not eligible to take ride"
        })
    } else {
        next()
    }

}

app.get('/ride', (req, res) => {
    res.send({ message: "Welcome to the ride!" })
})

app.use(eligibility);

app.get('/ride2', (req, res) => {
    res.send({ message: "Welcome to the ride!" })
})

app.listen(3000)
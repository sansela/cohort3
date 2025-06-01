const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
const JWT_SECRET = 'mysecret'

app.use(express.json())

const users = []
app.post('/signup', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    users.push({
        username, password
    })
    console.log(users);
    res.status(201).send({
        message: "User Signed up successfully"
    })
})

app.post('/signin', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const user = users.find(user => (user.username === username && user.password === password))
    console.log(user)


    if (user) {
        const token = jwt.sign({ username: user.username }, JWT_SECRET)
        res.status(200).json({
            token: token
        })
    } else {
        res.status(401).json({
            message: "Unauthorized to Login"
        })
    }

})

app.listen(3000, () => {
    console.log("Server listening on 3000")
})
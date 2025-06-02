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
    res.status(201).send({
        message: "User Signed up successfully"
    })
})

app.post('/signin', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const user = users.find(user => (user.username === username && user.password === password))


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

function auth(req, res, next) {
    try {
        const authHeader = req.headers.authorization
        const userData = jwt.verify(authHeader, JWT_SECRET)
        const username = userData.username;
        const user = users.find(user => user.username === username)
        const password = user.password
        req.password = password
        next()
    } catch (err) {
        console.log("auth Error: ", err)
        return res.status(403).json({
            message: "Authencation Error"
        })
    }
}

app.get('/me', auth, (req, res) => {
    return res.json({
        password: req.password
    })
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(3000, () => {
    console.log("Server listening on 3000")
})
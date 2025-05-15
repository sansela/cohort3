const express = require('express')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'jwtsecret'

const app = express();
app.use(express.json())

const users = []

app.post('/signup', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    users.push({
        username: username,
        password: password
    })
    console.log(users)
    res.json({
        message: "You are signed in"
    })
});

app.post('/signin', (req, res) => {

    const username = req.body.username
    const password = req.body.password
    let foundUser = null

    foundUser = users.find(user => user.username === username && user.password === password)
    if (foundUser) {
        // let token = generateToken()
        let token = jwt.sign({
            username: foundUser.username
        }, JWT_SECRET)

        foundUser.token = token
        console.log(users)

        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            message: "Invalid username or password"
        })
    }

});

app.get('/me', (req, res) => {
    let foundUser = null
    const token = req.headers.token
    const decodedUser = jwt.verify(token, JWT_SECRET)
    // foundUser = users.find(user => user.token === token)
    foundUser = users.find(user => user.username === decodedUser.username)
    if (foundUser) {
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    } else {
        res.json({
            message: "Invalid token"
        })
    }
})

function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

app.listen(3000)
const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const { User, Todo } = require('./db')
const app = express()

const JWT_SECRET = 'secret@123'

app.use(express.json())

mongoose.connect('')

app.post('/signup', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email

    const user = new User({
        username,
        password,
        email
    })

    user.save().then(() => {
        res.status(201).json({
            message: "Signed up successfully"
        })
    }).catch((err) => {
        console.log(err);
        res.status(409).json({
            message: "User already exists"
        })

    })
})

app.post('/signin', (req, res) => {
    const email = req.body.email
    const password = req.body.password

    User.findOne({ email, password }).then(user => {
        if (!user) {
            res.status(401).json({ message: "Login not successful" })
        } else {
            const token = jwt.sign({ id: user._id }, JWT_SECRET)
            res.status(200).json({ token: token })
        }
    }).catch(err => {
        console.log(err)
        res.status(500).json({ message: "Internal Server error" })
    })


})

app.post('/todo', auth, async (req, res) => {

    const title = req.body.title
    const completed = req.body.completed


    await Todo.create({
        title: title,
        completed: completed,
        userId: req.id
    })
    res.status(201).json({
        message: "todo created"
    })
})

app.get('/todos', auth, (req, res) => {

    Todo.find({
        userId: req.id
    }).then(todos => {
        res.status(201).json({ todos })
    }).catch(err => {
        res.status(500).json({
            message: "Error retrieving Todos"
        })
    })
})

function auth(req, res, next) {
    const token = req.headers.authorization
    const { id } = jwt.verify(token, JWT_SECRET)

    if (id) {
        req.id = id
        next()
    } else {
        return res.status(403).json({ message: "Auth Error" })
    }
}

app.listen(3000, () => {
    console.log('Server started listening on port 3000')
})
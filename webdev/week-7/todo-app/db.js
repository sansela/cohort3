const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    username: String,
    password: String,
    email: {
        type: String,
        unique: true
    }
})

const todoSchema = new Schema({
    title: String,
    completed: Boolean,
    userId: Schema.Types.ObjectId
})

const User = mongoose.model('User', userSchema)
const Todo = mongoose.model('Todo', todoSchema)

module.exports = {
    User, Todo
}
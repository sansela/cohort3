const express = require('express')
const app = express()

let count = 0

let todos = []

app.use(express.json())

app.get('/todos', (req, res) => {
    res.json(todos);
})

app.get('/todo', (req, res) => {
    const id = req.query.id;
    todos.forEach(todo => {
        if (todo.id == id) {
            res.status(200).json(todo)
        }
    })
    res.status(404).json({
        message: "No todo found"
    })
})

app.post('/todo', (req, res) => {
    const title = req.body.title;
    todos.push({
        id: ++count,
        title: title
    })
    res.json({
        message: "todo added"
    })
})

app.put('/todos/:id', (req, res) => {
    const id = req.params.id
    const title = req.body.title;

    todos.forEach(todo => {
        if (todo.id == id) {
            todo.title = title
            res.status(200).send({
                message: "TODO updated"
            })
        }
    })
    res.status(404).send({
        message: "No ToDo found"
    })

})

app.delete('/todos/:id', (req, res) => {
    const id = req.params.id
    const updatedTodos = todos.filter(todo => todo.id != id)
    if (todos.length == updatedTodos.length) {
        res.status(404).send({
            message: "TODO Not fund"
        })
    } else {
        todos = updatedTodos
    }
    res.status(200).send({
        message: "Successfully Deleted!"
    })
})



app.listen(3000);
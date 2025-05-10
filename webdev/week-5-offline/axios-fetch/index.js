const axios = require('axios')
// async function fetchDemo() {

//     const response = await fetch('https://dummyjson.com/todos')
//     const todos = await response.json()
//     console.log(todos.todos.length)
// }

// fetch('https://dummyjson.com/todos/add', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     todo: 'Use DummyJSON in the project',
//     completed: false,
//     userId: 5,
//   })
// })
// .then(res => res.json())
// .then(console.log);

async function fetchDemo() {
    const response = await fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userId: 5
        })

    })
    console.log(await response.json())
}

// fetchDemo()

async function axiosDemo() {
    // const response = await axios.get('https://dummyjson.com/todos')
    const response = await axios.post('https://dummyjson.com/todos/add', {

        userId: 5

    }, { headers: { 'Content-Type': 'application/json' } })
    console.log(response.data)
}
axiosDemo()
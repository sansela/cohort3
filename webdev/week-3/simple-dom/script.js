function addTodo() {
    const inputEl = document.querySelector("input").value
    console.log(inputEl)
}
let count = 0
function updateTodo() {
    count++
    document.querySelector(".todo3").innerHTML = count;
}
// setInterval(updateTodo, 1000);

function destroy(index) {
    const elementToDestroy = document.getElementById('todo' + index);
    elementToDestroy.parentNode.removeChild(elementToDestroy)
}
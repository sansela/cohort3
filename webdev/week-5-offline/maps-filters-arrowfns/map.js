const arr = [1, 2, 3, 4, 5]
const newArr = []

// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] * 2)
// }

// console.log(newArr)

//map
function transform(i) {
    return i * 2
}
// const ans = arr.map(transform)
const ans = arr.map(function (i) {
    return i * 2
})
console.log(ans)
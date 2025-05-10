const arr = [1, 2, 3, 4, 5]
const newArr = []

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr)

const filteredArr = arr.filter(function (n) {
    if (n % 2 == 0) {
        return true
    } else {
        return false
    }
})
console.log(filteredArr)
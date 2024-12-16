// array => store in multiple vale store in one variable

// high order method 

// 1 . filter
let data = [11, 22, 33, 44, 55]
// let arr = data.filter(function (ele, index) {
//     return ele >= 30;
// })
// console.log(arr)

// 2. find

// let arr = data.find(function (ele, index) {
//     return ele >= 10
// })
// console.log(arr)

// 3. finfindex

// let arr = data.findIndex(function (ele, index) {
//     return ele >= 12
// })
// console.log(arr)

// 4. every

// let arr = data.every(function (ele, index) {
//     return ele >= 23
// })
// console.log(arr)

// 5. some

// let arr = data.every(function (ele, index) {
//     return ele >= 10
// })
// console.log(arr)

// 6.includes

let arr = data.includes(function (ele, index) {
    console.log(55)
    // return ele === 55
})
console.log(data.includes(44));



// 7. indexof

// console.log(data.indexOf(44));


// 8. foreach

// let arr = data.forEach(function (ele, index) {
//     console.log(ele)
// });

// looping
// for (let i = 0; i < data.length; i++) {
//    console.log([i])  
// }

// 9. map
// let arr = data.map((ele, index) => {
//     return ele * 2
// })
// console.log("data ==>",data)
// console.log("arr ==>",arr)

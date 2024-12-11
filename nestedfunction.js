// variable as a function 

// let a = function(x,y){
//     console.log(x+y);
// }
// a(10,5)



// allow function 

// let product = (x, y) => x * y

// console.log(product(10,20));

// IIFE : immodting invoting function expression

// (function (m, n) {
//     return m + n;
// })
// console.log((1, 2))

// nested function / cosuer function

function outline() {
    function innerfun() {
        return "hello world!!!!!!"
    }

    console.log("outline function")
    return innerfun;
}
console.log(outline()());

// let a = outline()
// console.log(a())
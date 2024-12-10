// function sayhello(n){
//     console.log("inside value ,",n);
//     if(n<5){
//         sayhello(++n);
//     }
//     console.log("finished",n)
// }
// sayhello(1);

// function fact(n) {
//     if (n == 1) {
//         return 1;
//     } else {
//         return n * fact(n - 1);
//     }
// }
// console.log(fact(5));


function fibonacci(n) {
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(10))
// function fibo(a, b, c) {
//     console.log(a)
//     for (let i = 0; i <= 5; i++) {
//         c = a + b;
//         console.log(c);
//         a = b
//         b = c
//     }
// }
// console.log(fibo(1, 1))
// 1 

function greeting(abc) {
    if (abc) {
        console.log("hello")
    } else {
        console.log("good morning!!!!");
    }
}
greeting();

// output : good morning..

///////////////////////////////////////////////////


// 2

// function circle(pi, r) {
//     let area = pi * r * r;
//     return area;
// }
// console.log("area of circle", circle(3.14, 4));
// output :area of circle : 50.24

////////////////////////////////////////////////////


// 3

// function triangle(l, h) {
//     let area = ((l * h) / 2)
//     return area;
// }
// console.log("Area of triangle :", triangle(12, 2));
// output : area of triangle : 12

//////////////////////////////////////////////////////


// 4

// function rectangle(l, h) {
//     let area = l * h
//     return area;
// }
// console.log("Area of rectangle :", rectangle(10, 20));

// output : Area of rectangle : 200


/////////////////////////////////////////////////////


// 5

// function xyz(a, b, c) {
//     let ans = (b * b) * (4 * a * c) / (2 * a)
//     return ans;
// }
// console.log("find ans:",xyz(12, 5, 8));

// output : find ans :400

/////////////////////////////////////////////////

// 6

// function abc(a,b) {
//     let ans=(a*a)+(2*a*b)+(b*b)
//     return ans;
// }
// console.log("find ans:",abc(12,5));

// output 289

////////////////////////////////////////////////

// 7

// let f = 8;
// function celsius(a) {
//     let c = (f * 32) /1.8;
//     return c;
// }
// console.log(celsius(f));

// output 142.222


/////////////////////////////////////////////////

// 8


// let celsius = 10;
// function fahaenheit(a) {
//     let f = celsius * 1.8 + 32;
//     return f;
// }
// console.log(fahaenheit(celsius));

// output : 37

///////////////////////////////////////////////

// 9

// let num = 1;
// function number(odd) {
//     if (odd % 2 == 0) {
//         console.log("even number");
//     }
//     else {
//         console.log("odd number");
//     }
// }

// number(num);

//   output : 1 is odd number

///////////////////////////////////////////////////////////////

// 10

// function swapping(x, y) {
//     console.log("Before swapping : x =", x, ", y =", y);
//     x = x + y;
//     y = x - y;
//     x = x - y;

//     console.log("After swapping : x =", x, ", y =", y);
// }
// swapping(10, 12);

// output : Before swapping : x = 10 , y = 12  Before swapping : x = 12 , y = 10
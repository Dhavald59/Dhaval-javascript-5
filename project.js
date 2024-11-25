//1. write a javascript program to find the area of a triange 

let ba = 22, h = 5;
let triangle = 1 / 2 * ba * h;

console.log("find the area of a triange :", triangle);

// output :find the area of a triange: 55 ;

// 2.write a javascript program to convert temperatures to and from celius, faharenheit.

let celsius = 32, formula = 5 / 9;
let fahrenheit = (celsius * 9) / 5 + 32;

console.log("convert celsius into fahrenheit :", fahrenheit);

// output : convert fahrenheit into celsius : 89.6 ;

// 3. write a javascript program to find the area of a rectangle.

let lg = 12, w = 7;
let rectangle = lg * w;

console.log("find the area of rectangle :", rectangle);

// output : find the area of rectangle : 84 ;

// 4. write a javascript program to find the area of a circle.
let r = 7;
let circle = 3.14 * r * r;

console.log("find the area of circle :", circle);

// output : find the area of circle : 153.94 ;

// 5. write a javascript program to convert to feet into inches.

let feet = 8;
let inche = feet * 12

console.log("convert feet into inche :", inche);

// output : convert feet into inche : 120 ;

// 6. write a javascript program to calculate given formula.

// 1.
var a = 8, b = 6;
var form = a * a - b * b;
console.log("find the value of form :", form);
var form = (a - b) * (a + b);
console.log("find the value of form :", form);
console.log(form == form);

// output : find the value of form : 28 find the value of form : 28 true.

// 2.
var a = 10, b = 5;
var num1 = (a - b) ** 2;
console.log("find the num1", num1);
var num2 = a ** 2 - 2 * a * b + b ** 2;
console.log("find the num2", num2);
console.log(num1 == num2);

// output :find the num1 =25 , fing the num2 = 25 , true.

// 3.

var a = 3, b = 4, c = 8;
var num1 = (a + b + c) ** 2;
console.log("find the num1", num1);
var num2 = a ** 2 + b ** 2 + c ** 2 + 2 * (a * b) + 2 * (a * c) + 2 * (b * c);
console.log("find the num2", num2);
console.log(num1 == num2);

// output :find the num1 =225 , fing the num2 = 225 , true.

// 4. 

var a = 10, b = 5, c = 12;
var num1 = (a-b-c)**2;
console.log("find the num1 ", num1);
var num2 = a ** 2 + b ** 2 + c**2 - 2*(a*b) - 2*(a*c) + 2*(b*c);
console.log("find the num2 ", num2);

console.log(num1 == num2);

// output :find the num1 = 49 , fing the num2 = 49 , true.

// 5.

var a = 8 , b = 6 ;
var num1 = (a-b) ** 3;
console.log("find the num1 " ,num1);
var num2 = a ** 3 - 3 * a ** 2 * b + 3 * a* b**2 - b**3 ;
console.log("find the num2 ", num2);

console.log(num1 == num2);
//  output :find the num1 = 8 , fing the num2 = 8 , true.

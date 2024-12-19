// pogram : 1

// let mycolor = ["red", "green", "white", "black"]

// console.log(mycolor.join(", "));

// console.log("Red + Green + White + Black");

// console.log(mycolor.slice(0, 3).join(", "));

// console.log(mycolor[0]);

// console.log(mycolor.slice(1, 3).join(", "));

// mycolor.push("orange");
// console.log(mycolor.join(", "));

////////////////////////////////////////////////////////////////////

// pogram2

// let arr = [10,20,30,40,50,60,70,80];
// let sumforEach = sumfor = 0;
// for (let i = 0; i < arr.length; i++) {
//     sumfor += arr[i]
// }
// arr.forEach((ele, index) => {

//     sumforEach += ele;
// })
// console.log("Sum using for loop " + sumfor)
// console.log("Sum using forEach " + sumforEach)

// output : sum using for loop 360 ,Sum using forEach 360

////////////////////////////////////////////////////////////////////

// pogram3

// var arr = [11, 34, 56, 8, 9, 4, 18, 20];
// var min = (max = arr[0]);
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log("minimum value of array is " + min);
// console.log("minimum value of array is " + max);

// output : minimum value of array is 4 , minimum value of array is 56


///////////////////////////////////////////////////////////////////

// pogram 5
// let numbers=[-23,-20,-17,-12,-5,0,1,5,12,19,20]
// let arr = numbers.filter( (ele, index) => {
//     return ele >= 0;
// })
// console.log(arr);

// output : [0,1,5,12,19,20]

////////////////////////////////////////////////////////////////////


// pogram 6

// let arr = [2, 5, 6, 3, 8, 9]
// let square = arr.map((ele, index) => {
//     return ele ** 2
// })
// console.log("arr ==>", square)

// output : [4,25,36,9,64,81]

/////////////////////////////////////////////////////////////////////

// pogram 7


// let numbers = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];
// let myColor = ["Red", "Green", "White", "Black"];

// let ascending = numbers.sort((a, b) => a - b);
// console.log("Ascending value:", ascending); 
// // Output :- Ascending value: (11) [0, 1, 5 , 5 , 12 , 12 , 17 , 19 , 20 , 20 , 23]

// let ascend = myColor.sort();
// console.log("Ascend value:", ascend); 
// // output :- Ascend value: ['Black', 'Green', 'Red', 'White']


// let descending = numbers.sort((a, b) => b - a);
// console.log("Descending value:", descending);
// // Output :- Descending value: (11) [23, 20, 20, 19, 17, 12, 12, 5, 5, 1, 0]

// let descend = myColor.reverse();
// console.log("Descend value:", descend);
// // output :- Descend value: ['White', 'Red', 'Green', 'Black']


////////////////////////////////////////////////////////////////////

// pogram 8

// let words = ['Paython', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby']
// let arr = words.filter((ele, index) => {
//     return ele.length >= 8;
// })
// console.log(arr);

// output : [javascript]

/////////////////////////////////////////////////////////////////////

// pogram 9

// 1)
// let X = "airplane";
// console.log(X[2]);
//  // Output :- r

// // 2)
// let Y = "oxoxoxox";
// let rlt = "";
// for (let i = 0; i < X.length; i++) {
//     rlt += (i % 2 === 0) ? Y[i].toLowerCase() : Y[i].toUpperCase();
// }
// console.log(rlt);

// Output: "oXoXoXoX"

/////////////////////////////////////////////////////////////////////

// pogram 10

// let toreverse = [10, 20, 30, 40, 50]

// toreverse.reverse();
// console.log(toreverse);

// output : [50,40,30,20,10]

/////////////////////////////////////////////////////////////////////

// pogram 11

// let fru = ["apple", "banana", "cherry"];

// console.log(fru.includes("banana") + `, the array.`);
// // Output :- true 'the array.

// console.log(fru.includes("orange") + `, not array.`);
// Output :- false 'not array.

/////////////////////////////////////////////////////////////////////

// pogram 12

// let Name = "Dhaval";
// console.log("The Number of Total Character is :", Name.length);

// Output :- The Number of Total Character is : 6

/////////////////////////////////////////////////////////////////////

// pogram 13

// let str = `I often take a walk with my dog in the evening.
// His dog follows him everywhere. I don't feed my dog in the morning`;
// console.log("String Before Replace :-", str);
// let newStr = str.replace(/dog/g, "cat");
// console.log("String After Replace :-", newStr);

// Output: "I often take a walk with my cat in the evening.

/////////////////////////////////////////////////////////////////////

// pogram 14

// let string = "Hire the top 1% freelance developers";
// let stringToarray = string.split(" ");

// console.log("Array : ", stringToarray);
// Output:- Array : ["Hire", "the", "top", "1%", "freelance", "developers"]

/////////////////////////////////////////////////////////////////////

// pogram 15

// let arr = ['5',32,'daniel']

// let string = arr.join();

// console.log(string);


// output : 5,32,daniel

// change password
// let oldpass, newpass, confpass;
// oldpass = prompt('enter your old password')
// newpass = prompt('enter your new password')
// confpass = prompt('enter your conform password')
// if (oldpass == newpass) {
//     console.log('password is already exit');
// } else {
//     if (newpass != confpass) {
//         console.log('password is not same');
//     } else {
//         console.log('password is successfully chnaged....!');
//     }
// }


///////////////////////////////////////////////////////////////////


// pogram 1

let unit;
unit = Number(prompt("enter your unit "));
if (unit <= 100) {
    console.log("Your charged a minimuum 50 rs", (unit * 0.60) + 50)
}
else if (unit >= 100 && unit < 300) {
    console.log("Your charged 60p.", ((unit - 100) * 0.80) + 50 + 60);
}
else if (unit >= 300) {
    console.log("Your charged 90p.", (((unit - 300) * 0.90) + 50 + 60 + 160) + ((unit-300)*15/100));
}

else {
    console.log("uit is not valid");
}




/////////////////////////////////////////////////////////////////////



// pogram 2
// let age;
// age = prompt('Enter your age');
// if (age >= 18) {
//     console.log('person eligible for vote');
// }
// else {
//     console.log('person is not valid....!');
// }


////////////////////////////


// pogram 3


// let salary;
// salary = Number(prompt('enter  your salary'));
// if (salary <= 5000) {
//     console.log('HRA salary is 1: ', salary * 0.08);
//     console.log('DA salary is 1: ', salary * 0.20);
// }
// else if (salary >= 5000 && salary < 10000) {
//     console.log('HRA salary is 2: ', ((salary - 5000) * 0.08 + 400));
//     console.log('DA salary is 2: ', ((salary - 5000) * 0.30 + 1000));
// }
// else if (salary >= 10000 && salary < 15000) {
//     console.log('HRA salary is 3: ', ((salary - 10000) * 0.15 + 400 + 400));
//     console.log('DA salary is 3: ', ((salary - 10000) * 0.40 + 1000 + 1500));
// }
// else if (salary >= 15000) {
//     console.log('HRA salary is 4: ', ((salary - 15000) * 0.20 + 400 + 400 + 750));
//     console.log('DA salary is 4: ', ((salary - 15000) * 0.50 + 1000 + 1500 + 2500));
// }
// else {
//     console.log('salary is not valid')
// }




///////////////////////////////////////////////////////////////////


// pogram 4
// let income;
// income = prompt('enter  your income');
// if (income <= 2500) {
//     console.log('Tax free: ');
// } else if (income >= 2500 && income < 5000) {
//     console.log('slab 2 is : ', (income - 2500) * 0.10);
// } else if (income >= 5000 && income < 10000) {
//     console.log('slab 3 is : ', ((income - 5000) * 0.20 + 250));
// } else if (income >= 10000) {
//     console.log('slab 4 is : ', ((income - 10000) * 0.30 + 250 + 1000));
// }
// else {
//     console.log('income is not valid')
// }


///////////////////////////////////////////////////////////


// pogram 5
// let marks;
// marks = Number(prompt("enter your mark "));
// if (marks >= 75) {
//     console.log("Your grade is A")
// }
//  else if (marks >= 60 && marks < 75) {
//     console.log("Your grade is B");
// }
// else if (marks >= 45 && marks < 60) {
//     console.log("Your grade is C");
// }
// else if (marks >= 35 && marks < 45) {
//     console.log("Your grade is D");
// }
//  else {
//     console.log("you are fail");
// }


////////////////////////////////////////////////////////////

// pogram 6

// let x, y;
// x = Number(prompt("enter your value of x "));
// y = Number(prompt("enter your value of y"));
// if (x < 2000 || x > 3000) {
//     console.log('value of x :', x);
// }
// else if (y > 100 && y < 500) {
//     console.log('value of Y :', y);
// }
// else {
//     console.log("no value is printed");
// }

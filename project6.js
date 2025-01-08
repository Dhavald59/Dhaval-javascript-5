// pogram 1

class School {
    Studant(name, email, contact) {
        console.log("Studant name is :", name);
        console.log("Studant email :", email);
        console.log("Studant contact Number is :", contact);
    }
    Faculty(name, email, contact) {
        console.log("Faculty name is :", name);
        console.log("Faculty email :",email);
        console.log("Faculty contact Number is :", contact);
    }
}

let Deatil = new School();
Deatil.Studant("Dhaval Desai", "dhavald@gmail.com", 1234567891);
Deatil.Faculty("Girishsir", "Girishsir@gmail.com", 9472123446);

// output :
// Studant name is : Dhaval Desai
// Studant email : dhavald@gmail.com
// Studant contact Number is : 1234567891
// Faculty name is : Girishsir
// Faculty email : Girishsir@gmail.com
// Faculty contact Number is : 9472123446


//////////////////////////////////////////////////////////

// pogram 2

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// class Employee extends Person {
//     constructor(name, age) {
//         super(name, age);
//     }

//     Perdetail() {
//         console.log("Person name is :", this.name);
//         console.log("Person age is :", this.age);
//     }
// }

// let EmpDetail = new Employee("Dhaval", 20);
// EmpDetail.Perdetail();

// output :
// Person name is : Dhaval
// Person age is : 20


//////////////////////////////////////////////////////////
// pogram 3

// class Employee{
//     constructor(SiMassges){
//         this.SiMassges = SiMassges;
//     }
//     sayMeassge(){
//         console.log(this.SiMassges);  
//     }
// }

// let Saysimple = new Employee("Hello Javascript.....");
// Saysimple.sayMeassge();

// output : Hello Javascript.....


//////////////////////////////////////////////////////////


// pogram 4

// class Shape {
//     Circle(radius) {
//         console.log("Circle value is :",3.14 * radius * radius);
//     }

//     Rectangle(width, height) {
//         console.log("Rectangle value is :",width * height);
//     }
// }

// let CirArea = new Shape();
// CirArea.Circle(12);

// let ReaArea = new Shape();
// ReaArea.Rectangle(10,2);

// output : 
// Circle value is : 452.15999999999997
// Rectangle value is : 20
//////////////////////////////////////////////////////////
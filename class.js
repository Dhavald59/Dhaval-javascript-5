class Test {
    constructor(name, city) {
        this.name = name
        this.city = city
    }
    sayHello() {
        console.log("Hello 2025 ......!", this.name, this.city);
    }
    addtion(a,b){
        console.log(a/b);
        
    }
}
let obj = new Test("virat kohli", "RCB");
obj.sayHello()

let data = new Test("Rohit Sharma", "MI");
data.sayHello()
data.addtion(10,20)
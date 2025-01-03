// polymophism : many form

class test {
    sayHello(){
        console.log("test class called......!")
    }
}
class result extends test {
    sayHello(){
        console.log("result class called......!")
    }
}

let polymophism = new result();
polymophism.sayHello();
let polymophism2 = new test();
polymophism2.sayHello();
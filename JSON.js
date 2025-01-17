                                  //  JAVASCRIPT OBJECT => JSON //

// let user = {
//     name: "Dhaval Desai",
//     age: 20,
//     email: "Dhavaldesai@gmail.com"
// }

// console.log(user);

// let obj = JSON.stringify(user)
// console.log(obj)

                                   // JSON => JAVASCRIPT OBJECT //


// let person = '{"name":"xyz","age":20,"email":"xyz@gmail.com"}'
// console.log(person);

// let personobj = JSON.parse(person)
// console.log(personobj)


// localStorage : setItem

let user = {
    name: "Dhaval Desai",
    age: 20,
    email: "Dhavaldesai@gmail.com",
    hobbie : ["movie ","music"]
}

// localStorage.setItem('userinfo',JSON.stringify(user))
// console.log(user);
let resulte = localStorage.getItem('test')
console.log(resulte);
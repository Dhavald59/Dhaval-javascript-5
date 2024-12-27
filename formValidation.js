let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let pass = document.getElementById('password');
let date = document.getElementById('DOB');
let hobbies = document.getElementById('hobbies');
let form = document.querySelector("#Formvalidation");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let gender = document.querySelector('input[name = "gender"]:checked');

    if(validateForm()){
        console.log("submit Form");  
    }
    console.log(fname.value);
    console.log(lname.value);
    console.log(email.value);
    console.log(pass.value);
    console.log(date.value);
    console.log(hobbies.value);
    console.log(gender.value);
});

function validateForm() {
    let isValid = true ;
    if (fname.value === "") {
        document.getElementById("fnameErr").innerHTML = "first name empty";
        isValid = false;
    } else if (fname.value.length < 3) {
        document.getElementById("fnameErr").innerHTML = "minimuim use 3 charecter";
        isValid = false;
    }
    if (lname.value === "") {
        document.getElementById("lnameErr").innerHTML = "Last name empty";
        isValid = false;
    } else if (lname.value.length < 3) {
        document.getElementById("lnameErr").innerHTML = "minimuim use 3 charecter";
        isValid = false;
    }

    if (email.value === "") {
        document.getElementById("emailErr").innerHTML = "email is not  empty";
        isValid = false;
    }

    if (pass.value === "") {
        document.getElementById("passErr").innerHTML = "password is not empty";
        isValid = false;
    } else if (paa.value.length < 3) {
        document.getElementById("passErr").innerHTML = "password use 3 charecter ";
        isValid = false;
    }else{
        let validPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if(!validPass.test(pass.value)){
        document.getElementById("passErr").innerHTML = "password in atlent one upeer ,lowwer and digit & spiecal charecter";
        isValid = false;
        }
    }

    if (date.value === "") {
        document.getElementById("DOBErr").innerHTML = "Dob select one";
        isValid = false;
    }
    if (hobbies.value === "") {
        document.getElementById("hobbiesErr").innerHTML = "hobbies select one";
        isValid = false;
    }
    if (!gender) {
        document.getElementById("genderErr").innerHTML = "gender select one";
        isValid = false;
    }
    return isValid;
}



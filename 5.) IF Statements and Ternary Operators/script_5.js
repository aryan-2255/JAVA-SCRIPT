// // IF STATEMENTS = if condition is true execute some code
//                  id not, do something else

// let age = 13;
// if(age >= 18){
// console.log(`you are eligible to enter this site`);
// }
// else{
//     console.log(`not eligible`);
// }




// let isStudent = false;
// if (isStudent){
//     console.log("you are a student!");
// }
// else{
//     console.log("you are NOT a student!");
// }




// // nested condition

// let agee = 25;
// let hasLicence = false;
// if(agee >= 18){
//     console.log("you are eligible for licence in india");
//     if(hasLicence){
//         console.log("you have licence already");
//     }
//     else{
//         console.log("you do not have licence yet");
//     }

// }
// else{
//     console.log("you are minor nor eligble for thr licence");
// }




// let ageee = 0
// if (ageee >= 100){
//     console.log("you are too old to enter this website");
// }
// else if(ageee >= 18){
//     console.log("you are eligible to this site");
// }
// else if (ageee <= 0){
//     console.log("you are not born yet");
// }
// else{
//     console.log("you are not eligible to this site");
// }





// // ternary operator = a shortcut to if{} and else{} statements helps to assign avariable based on a condition
// //    condition ? codeiftrue : codeifFalse;

let agee = 21;

let message = agee >= 18 ? "you are an adult" : " you are a minor"
console.log(message)










// // for html code

const input = document.getElementById("ageinput");
const submit = document.getElementById("submit");
const output = document.getElementById("output");
let age;

submit.onclick = function () {

    age = ageinput.value;
    age = Number(age);
    if (age >= 100) {
        output.textContent = `you are too old to enter this website`;
        console.log("100 or greater");
    }
    else if (age >= 18) {
        output.textContent = `you are eligible to this site`;
        console.log("18 or greater");
    }
    else if (age <= 0) {
        output.textContent = `you are you are not born yet`;
        console.log("0 or less");
    }
    else {
        console.log("you are not eligible to this site");
    }
    
}


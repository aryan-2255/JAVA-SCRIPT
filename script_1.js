/* 
alert('hello world')

console.log("5")

let x = 2
let y = 3
let z = x+y
console.log(z)

let abc = Math.round(2.756)
console.log(abc)
*/


document.getElementById("myH1").textContent = (`hello bro`);
document.getElementById("myP").textContent = (`i like everything `);




// variable  = a container store a value

let fullName = "aryan";
let age = 19;
let isStudent = false ;
document.getElementById("p1").textContent = fullName;
document.getElementById("p2").textContent = `my age is ${age}`;
document.getElementById("p3").textContent = `enrollen in school ${isStudent}`;




// arthmetic operators = operands (variables, values, etc )
// operators (= - * /)
// ex. x + 5 = 11
// other operators are also there etc....




// how to accept user input

// 1. easy way = window prompt
let userName;
// userName = window.prompt("whats your username?");
console.log(userName);

// 2.  proffesonal way = html textbox
let username;
document.getElementById("mysubmit").onclick = function(){
     username = document.getElementById("mytext").value;
     console.log(username);
     document.getElementById("myh2").textContent = `username submited is: ${username}`;
}




// type conversion = change the data type value to another (strings, numbern, boolean)
let x = "pizza";
let y = "pizza";
let z = "pizza";
x = Number(x);
y = String(y);
z = Boolean(z);
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);



// constant (const)
// enter a radius of a circle
const PI = 3.14159;
let radius;
let circumferance;
document.getElementById("submit").onclick = function(){
    radius = document.getElementById("radius").value;
    console.log(radius)
    radius = Number(radius);
    circumferance = 2 * PI * radius;
    document.getElementById("myh4").textContent = `circumference is ${circumferance}`;
    console.log(circumferance)
}

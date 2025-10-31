// while loop = repeat some code WHILE some condition is true

// // ex

// let username = "";
// while(username === ""){
//     username = window.prompt(`enter your name`);
// }
// console.log(`hello ${username}`);


// // ex
let loggedIn = false;
let username; 
let password;

while(!loggedIn){
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");
    if (username === "aryan" && password === "2255"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else {
        console.log("Invalid credentials! Please try again");
    }
}

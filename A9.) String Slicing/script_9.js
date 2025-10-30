// string slicing - creating a substring from a portion 
//                    of another string

// string.slice(start,end);

const fullName = "aryan choudhary";

let firstName = fullName.slice(0,6);
let lastName = fullName.slice(6, );

let firstname = fullName.slice(0 , fullName.indexOf(" "));



console.log(firstName);
console.log(lastName);
console.log(firstname);



const email = "Bro1@gmail.com";
let username = email. slice(0, email. indexOf("@")) ;
let extension = email.slice(email.indexOf("@") + 1);
console. log(username);
console. log(extension);
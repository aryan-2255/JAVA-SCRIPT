// function = a section of reusable code declare code once,
//            use it when ever you want.
//            call the function to execute that code.
 

// // ex

function happyBirthday(username, age){
    console.log("happy birthday to you");
    console.log("happy birthday to you");
    console.log(`happy birthday to dear ${username}`);
    console.log("happy birthday to you");
    console.log(`you are ${age} year old`);

}

happyBirthday("aryan", 19);
happyBirthday("cp", 26);
happyBirthday("pratik", 20);




// // ex

function add(x,y){
    let result = x + y;
    return result % 2 === 0 ? true : false ;
}
output = add(10,10);
console.log(output)
// Variable Scope = where a variable is recognized
//                  and accessible (local v/s global)


let x = 1;
// let x = 2    # can not

function function1() {
let x = 1;
console.log(y);
}

function function2(){
let y = 2;
console.log(x) ;
}
// // switch = can be efficent replacement to many else if statements

let day = "8" ;
day = Number(day)
switch (day) {
    case 1:
        console.log("it is monday");
        break;
    case 2:
        console.log("it is tuesday");
        break;
    case 3:
        console.log("it is wednesday");
        break;
    case 4:
        console.log("it is thursday");
        break;
    case 5:
        console.log("it is friday");
        break;
    case 6:
        console.log("it is saturday");
        break;
    case 7:
        console.log("it is sunday");
        break;
    default:
        console.log("you have a bad day");
}



let testScore = 5;
let grade;
testScore = Number(testScore);
switch (true){
    case testScore >= 90:
    grade = "A";
    break;
    case testScore >= 80:
    grade = "B";
    break
    case testScore >= 70:
    grade = "c";
    break;
    default:
    grade = "fail marks less than 70";
}
console.log(grade)
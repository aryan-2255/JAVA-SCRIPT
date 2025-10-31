// NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()) * (maxNum - minNum + 1) + minNum;

console.log(answer);

let attempt = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`guess a number ${minNum} - ${maxNum}`);
    guess = Number(guess);
    
    if(isNaN (guess)){
        window.alert("please enter a valid no");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("please enter a valid no");
    }
    else{
        attempt++
        if (guess < answer){
            console.alert("too low try again");
        }
        else if(guess > answer){
            window.alert("too high try again")
        }
        else{
            console.log(`correct the answer was ${answer} it took you ${attempt} attempts`)
              running = false;
        }
    }
}
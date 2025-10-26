// // .checked = property that determine the checked state of an 
// //            HTML checkbox or radio button element

const forCheckbox = document.getElementById("checkbox")
const forTask1 = document.getElementById("radio1")
const forTask2 = document.getElementById("radio2")
const forTask3 = document.getElementById("radio3")
const forSubmit = document.getElementById("submit")
const forResult1 = document.getElementById("result1")
const forResult2 = document.getElementById("result2")

forSubmit.onclick = function(){
    if (forCheckbox.checked){
        forResult1.textContent = ` hey! you have completed the task`
    }
    else{
        forResult1.textContent = `complete the task first`
    }
    if (forTask1.checked){
        forResult2.textContent = `you completed task 1`
    }
    else if (forTask2.checked){
        forResult2.textContent = `you completed task 2`
    }
    else if (forTask3.checked){
        forResult2.textContent = `you completed task 3`
    }
    else{
        forResult2.textContent = `complete any  task`
        console.log(forResult2)
    }
}
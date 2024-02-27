const myform = document.querySelector("#my-form");
const emailInput = document.querySelector("#email")
//console.log(emailInput.value)
//const submit_input = document.querySelector(".btn")
console.log(myform)

myform.addEventListener("submit", onSubmit)

function onSubmit(e){
    e.preventDefault()
    console.log(emailInput.value)

   
}

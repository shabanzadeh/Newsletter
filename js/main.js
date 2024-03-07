const myform = document.querySelector("#my-form");
const emailInput = document.querySelector("#email")
const msg = document.querySelector(".msg")
const thank = document.querySelector(".thanks")

console.log(emailInput.value)
const submit_input = document.querySelector(".btn")

 

myform.addEventListener("submit",onSubmit)

function onSubmit(e){
    e.preventDefault()
    let pattern = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
    console.log(emailInput.value)
    if(emailInput.value==='' || !emailInput.value.match(pattern)){
        msg.innerHTML = "<h5> vaild email requierded</h5>"
        msg.classList.add("error")

        setTimeout(()=>{
            msg.innerHTML="";
            msg.classList.remove("error")

        },3000)
    }
    else{
        window.location.assign("success.html")
        thank.classList.add("thanks")
       
        
    }
    

   
}
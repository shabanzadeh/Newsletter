const myform = document.querySelector("#my-form");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");

myform.addEventListener("submit", onSubmit);

function onSubmit(e) {
    e.preventDefault();
    let pattern = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

    if (emailInput.value === '' || !emailInput.value.match(pattern)) {
        msg.innerHTML = "<h5>Valid email required</h5>";
        msg.classList.add("error");

        setTimeout(() => {
            msg.innerHTML = "";
            msg.classList.remove("error");
        }, 3000);
    } else {
       
        window.location.href = "success.html?email=" + encodeURIComponent(emailInput.value);
    }
}


    

   

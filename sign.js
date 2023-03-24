const but1 = document.getElementById("regis")
const but2 = document.getElementById("submit")
const div1 = document.getElementById("registration")
const div2 = document.getElementById("user")
but1.addEventListener("click", ()=>{
    div1.classList.remove("activ")
    div2.classList.add("activ")
    

})

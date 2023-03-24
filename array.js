const nam = document.getElementById("name");
const surname = document.getElementById("surname");
const mail = document.getElementById("mail");
const password =document.getElementById("pwd");
const submit = document.getElementById("submit")
const login = document.getElementById("login")
const mail1 =document.getElementById("mail1")
const pass = document.getElementById("password")

var array =[]
class obj{
    constructor(name, surname, mail, password){
        this.name = name
        this.surname = surname
        this.mail = mail
        this.password = password
    }
}
submit.addEventListener("click", ()=>{
    const nm = nam.value
    const surnm = surname.value
    const ml = mail.value
    const ps = password.value
    console.log(nm)
    console.log(ml)
    if(nm && surnm && ml && ps){
        
        let ob = new obj(nm, surnm, ml, ps)
        array.push(ob)
        localStorage.setItem('myArray', JSON.stringify(array))
    }
})

window.addEventListener('load', () => {
    const storedArray = localStorage.getItem('myArray')
    if (storedArray) {
        array = JSON.parse(storedArray)
        console.log(array)
    }
    
})

login.addEventListener("click", () => {
    let userFound = false
    for (let i = 0; i < array.length; i++) {
        if (array[i].mail === mail1.value && array[i].password === pass.value) {
            mail1.value = ""
            pass.value = ""
            userFound = true
            localStorage.setItem('loggedInUser', array[i].name)
            
            break; 
        }
    }
    if (!userFound) {
        mail1.value = ""
        pass.value = ""
        alert("Invalid user")
    }
});

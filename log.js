
const btn = document.querySelector(".btn")
const username = document.querySelector(".username")
const password = document.querySelector(".password")


btn.addEventListener("click",()=>{
    if(username.value.length<12 || password.value.length<10){
        const div = document.createElement("div")
        div.classList.add("modal")
        document.body.append(div)
        const p = document.createElement("p")
        div.append(p)
        div.style.backgroundColor = "rgb(223, 28, 28)"
        p.textContent = "please enter the correct information"
    }else{
        const div = document.createElement("div")
        div.classList.add("modal")
        document.body.append(div)
        const p = document.createElement("p")
        div.append(p)
        div.style.backgroundColor = "white"
        p.textContent = "welcome"
    }
})
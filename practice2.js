const btn = document.querySelector(".btn")
const bulbImg = document.querySelector(".bulbImg")
let bulbFlag = false
btn.addEventListener("click",()=>{
    
    if(bulbFlag){
        bulbImg.src = 'bulbimg/bulboff.gif'
        btn.textContent = 'Turn On'
        bulbFlag = false
    }else{
        bulbImg.src = 'bulbimg/bulbon.gif'
        btn.textContent = 'Turn Off'
        bulbFlag = true
    }
})
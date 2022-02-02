const option= document.querySelector(".option-container");
const optionSetting=document.getElementById("option-setting")
const openNav=document.getElementById("open-nav")
const navShow=document.querySelectorAll(".hide")

option.addEventListener("mouseover",()=>{
    optionSetting.style.display="block"
    optionSetting.addEventListener("mouseout",()=>{
        optionSetting.style.display="none"
    })
    option.addEventListener("mouseout",()=>{
        optionSetting.style.display="none"
    })
})
navShow.forEach(element=>{
    openNav.addEventListener("click",()=>{
        element.classList.toggle("hide")
    })
})

import utilities from './_change-language.js'
utilities.changeLanguaje(optionSetting);
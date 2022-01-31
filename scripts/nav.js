const option= document.querySelector(".option-container");
const optionSetting=document.getElementById("option-setting")

option.addEventListener("mouseover",()=>{
    optionSetting.style.display="block"
    optionSetting.addEventListener("mouseout",()=>{
        optionSetting.style.display="none"
    })
    option.addEventListener("mouseout",()=>{
        optionSetting.style.display="none"
    })
})
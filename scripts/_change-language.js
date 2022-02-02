function changeLanguaje(optionSetting){
    optionSetting.addEventListener("click",()=>{
        optionSetting.innerHTML=="Cambiar a Inglés"?changeToEnglish(optionSetting):changeToSpanish(optionSetting);
    })
}

function changeToSpanish(optionSetting){
    location.href="../index.html";
    optionSetting.innerHTML="Cambiar a Inglés";
}
function changeToEnglish(optionSetting){
    location.href="../en/index.html";
    optionSetting.innerHTML="Back to spanish";
}

export default{
    changeLanguaje
}
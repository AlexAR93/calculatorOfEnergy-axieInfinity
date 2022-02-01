const mark=document.querySelectorAll("td");
const mix=document.getElementById("mix")
mark.forEach(element=>{
    element.addEventListener("click",()=>{
        element.innerHTML.length<1?element.innerHTML="X":element.innerHTML=="X"?element.innerHTML="":false;
        mix.addEventListener("click",()=>element.innerHTML.length==1?element.innerHTML="":false)
    })
})




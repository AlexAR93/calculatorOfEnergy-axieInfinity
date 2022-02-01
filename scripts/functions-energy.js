function add(addEnergy,subtractEnergy,currentEnergy,energy,totalEnergy,nextRound,newGame,rounds){
    currentEnergy=parseFloat(currentEnergy)
    let round=2
    addEnergy.addEventListener("click",()=>{
        currentEnergy<10?currentEnergy++:false
        console.log(currentEnergy)
        return energy.innerHTML=currentEnergy+"/"+totalEnergy
    })
    subtractEnergy.addEventListener("click",()=>{
        currentEnergy>0?currentEnergy--:false
        console.log(currentEnergy)
        return energy.innerHTML=currentEnergy+"/"+totalEnergy
    })
    nextRound.addEventListener("click",()=>{
        rounds.innerHTML=`Ronda ${round++}`
        currentEnergy+=2
        console.log(currentEnergy)
        return currentEnergy<10?energy.innerHTML=currentEnergy+"/"+totalEnergy:energy.innerHTML=currentEnergy=10
    })
    newGame.addEventListener("click",()=>{
        currentEnergy=3
        energy.innerHTML=`${currentEnergy}/10`
        round=2
        rounds.innerHTML=`Ronda ${1}`
    })
}



export default{
    add
}
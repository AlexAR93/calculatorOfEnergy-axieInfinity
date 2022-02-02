import utilites from './functions-energy.js';

const subtractEnergy=document.getElementById("subtract-energy");
const addEnergy=document.getElementById("add-energy");
const nextRound=document.getElementById("next-round");
const newGame=document.getElementById("new-game");
const energy=document.getElementById("energy")
const rounds=document.getElementById("rounds")

let [currentEnergy,totalEnergy]=energy.textContent.split("/")

utilites.accountantEnergy(addEnergy,subtractEnergy,currentEnergy,energy,totalEnergy,nextRound,newGame,rounds)

//SLYTHERYN_________________________________________________________________
const botonOpenS = document.querySelectorAll(".casaS-modalOpen");
var modalS = document.querySelector(".fondo-modalS");
var cerrarS = document.querySelector(".closeCasaS");

botonOpenS.forEach((cadaBoton , i)=> {
    botonOpenS[i].addEventListener(`click`, () =>{
        modalS.classList.add(`show`);  
    });
})

cerrarS.addEventListener(`click`, () =>{
    modalS.classList.remove(`show`);
});


//REVENCLOUD_______________________________________________________________
const botonOpenR = document.querySelectorAll(".casaR-modalOpen");
var modalR = document.querySelector(".fondo-modalR");
var cerrarR = document.querySelector(".closeCasaR");

botonOpenR.forEach((cadaBoton , i)=> {
    botonOpenR[i].addEventListener(`click`, () =>{
        modalR.classList.add(`show`);  
    });
})

cerrarR.addEventListener(`click`, () =>{
    modalR.classList.remove(`show`);
});


//GREFEINDOR____________________________________________________________________
const botonOpenG = document.querySelectorAll(".casaG-modalOpen");
var modalG = document.querySelector(".fondo-modalG");
var cerrarG = document.querySelector(".closeCasaG");

botonOpenG.forEach((cadaBoton , i)=> {
    botonOpenG[i].addEventListener(`click`, () =>{
        modalG.classList.add(`show`);  
    });
})

cerrarG.addEventListener(`click`, () =>{
    modalG.classList.remove(`show`);
});


//HAFELPO__________________________________________________________________________
const botonOpenH = document.querySelectorAll(".casaH-modalOpen");
var modalH = document.querySelector(".fondo-modalH");
var cerrarH = document.querySelector(".closeCasaH");

botonOpenH.forEach((cadaBoton , i)=> {
    botonOpenH[i].addEventListener(`click`, () =>{
        modalH.classList.add(`show`);  
    });
})

cerrarH.addEventListener(`click`, () =>{
    modalH.classList.remove(`show`);
});
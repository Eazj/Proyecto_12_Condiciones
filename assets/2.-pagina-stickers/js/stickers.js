/*
/*Zona de captura
let inputUno = parseInt(document.getElementById("input1").value);
let inputDos = parseInt(document.getElementById("input2").value);
let inputTres = parseInt(document.getElementById("input3").value);
let resultado_span = document.querySelector(".resultado-span");
let resultado = document.querySelector(".verificar");

/*Zona de calculo
function prueba(){
    let suma = inputUno + inputDos + inputTres;
    resultado_span.innerHTML = suma
} */


function sumar() {
    var inputUno = parseInt(document.getElementById("input1").value);
    var inputDos = parseInt(document.getElementById("input2").value);
    var inputTres = parseInt(document.getElementById("input3").value);
    
    var suma = inputUno + inputDos + inputTres;
    
    document.querySelector(".resultado-span").innerText = suma;
    if(suma >10){
        document.querySelector(".resultado-span").innerText = "demasidos"
    }
  }
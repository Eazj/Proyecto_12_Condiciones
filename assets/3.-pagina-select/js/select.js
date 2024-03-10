function sumar() {
    var inputUno = document.getElementById("input1").value;
    var inputDos = document.getElementById("input2").value;
    var inputTres = document.getElementById("input3").value;
    
    var suma = inputUno + inputDos + inputTres;
    if(suma == 911){
        document.getElementById("resultado").innerText = "password 1 correcto"
    }
    else if(suma == 714){
        document.getElementById("resultado").innerText = "password 2 correcto"
    }
    else{
        document.getElementById("resultado").innerText = "password incorrecto"
    }
  }
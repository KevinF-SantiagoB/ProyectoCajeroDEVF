var Cuentados={
    nombre:'Fabian', 
    saldo:500, 
    contrasena:'321'
}
//Operacion Consulta Saldo - CUENTA 2
var CuentaSaldo2 = document.getElementById('CuentaSaldo2') //button consultar saldo
var MuestraSaldo2 = document.getElementById('MuestraSaldo2') //div de todo el muestreo de saldo
var CantidadAct2ual = document.getElementById('CantidadActual2') //tener el valor del label

function Saldo2() {
    CantidadActual2.innerHTML = String(Cuentados.saldo)
    MuestraSaldo2.classList.remove('none')
}

CuentaSaldo2.addEventListener('click',Saldo2)
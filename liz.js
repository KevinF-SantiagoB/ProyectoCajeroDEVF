var Cuentauno={
    nombre:'Lizeth', 
    saldo:800, 
    contrasena:'123'
}

//Parámetros Cuenta 1 
var ContainerIngreso = document.getElementById('ContainerIngreso')
var ContainerSaldo = document.getElementById('ContainerSaldo')
var ContainerRetiro = document.getElementById('ContainerRetiro')

var botonSaldoC1 = document.getElementById('botonSaldoC1') //boton usuario eligio ingresar
var botonIngresoC1 = document.getElementById('botonIngresoC1') //boton usuario eligio ingresar
var botonRetiroC1 = document.getElementById('botonRetiroC1') //boton usuario eligio retirar

var MontoC1 = document.getElementById('MontoC1')//Monto a ingresar input
var RetiroC1 = document.getElementById('RetiroC1')//Monto a ingresar input
var botonMontoC1 = document.getElementById('botonMontoC1') // Boton de ingresar dinero a la C1
var botonMontoRetiroC1 = document.getElementById('botonMontoRetiroC1') // Boton de retirar dinero de  C1





function consultaSaldoC1(){
    CantidadActual1.classList.remove('none')
    ContainerIngreso.classList.add('none')
    ContainerRetiro.classList.add('none')
    CantidadActual1.innerHTML ='Cantidad Actual: $'+ String(Cuentauno.saldo)
}


function ingresarInvisibilidad(){
    ContainerIngreso.classList.remove('none')
    ContainerRetiro.classList.add('none')
    CantidadActual1.classList.add('none')
}

function ingresarSaldoC1(){
    ContainerIngreso.classList.remove('none')
    var Dinero = parseInt(MontoC1.value,10)
    var Max = 990
    var Monto= Cuentauno.saldo+Dinero
    if(Monto>Max)
    { alert('LA CANTIDAD INGRESADA SUPERA EL LIMITE DE TU CUENTA')}
    else 
    {  Cuentauno.saldo=Monto
        alert('Tu saldo actual es: '+Cuentauno.saldo )
    }
}

function retirarInvisibilidad(){
    ContainerRetiro.classList.remove('none')
    ContainerIngreso.classList.add('none')
    CantidadActual1.classList.add('none')
}
function retirarSaldoC1(){
    ContainerRetiro.classList.remove('none')
    var DineroRetiro = parseInt(RetiroC1.value,10)
    var SaldoMin = 10
    var MontoRetiro= Cuentauno.saldo-DineroRetiro
    if(MontoRetiro<SaldoMin)
    { alert('LA CANTIDAD A RETIRAR ES MAYOR AL PERMITIDO')}
    else 
    {  Cuentauno.saldo=MontoRetiro
        alert('Tu saldo actual es: '+Cuentauno.saldo )
    }
}



botonSaldoC1.addEventListener('click',consultaSaldoC1)
botonIngresoC1.addEventListener('click', ingresarInvisibilidad)
botonMontoC1.addEventListener('click',ingresarSaldoC1)
botonRetiroC1.addEventListener('click',retirarInvisibilidad)
botonMontoRetiroC1.addEventListener('click',retirarSaldoC1)
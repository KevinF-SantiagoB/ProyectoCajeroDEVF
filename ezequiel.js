var Cuentatres={
    nombre:'Ezequiel', 
    saldo:100, 
    contrasena:'789'
}

//Parámetros Cuenta 3
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

var regresar2= document.getElementById('regresar2')//boton regresar

var Logout = document.getElementById('Logout')//boton cerrar sesion



function consultaSaldoC1(){
    botonIngresoC1.classList.add('none')
    botonRetiroC1.classList.add('none')
    CantidadActual1.classList.remove('none')
    ContainerIngreso.classList.add('none')
    ContainerRetiro.classList.add('none')
    CantidadActual1.innerHTML ='Saldo Actual: $'+ String(Cuentatres.saldo) +' MXN'
    regresar2.classList.remove('none')
}





function ingresarSaldoC1(){
    ContainerIngreso.classList.remove('none')
    var Dinero = parseInt(MontoC1.value,10)
    var Max = 990
    var Monto= Cuentatres.saldo+Dinero
    if(Monto>Max)
    { alert('LA CANTIDAD INGRESADA SUPERA EL LIMITE DE TU CUENTA')}
    else 
    {  Cuentatres.saldo=Monto
        alert('Tu saldo actual es: '+Cuentatres.saldo )
    }
}

function retirarInvisibilidad(){
    ContainerRetiro.classList.remove('none')
    ContainerIngreso.classList.add('none')
    CantidadActual1.classList.add('none')
    botonSaldoC1.classList.add('none')
    botonIngresoC1.classList.add('none')
    regresar2.classList.remove('none')
}


function retirarSaldoC1(){
    ContainerRetiro.classList.remove('none')
    var DineroRetiro = parseInt(RetiroC1.value,10)
    var SaldoMin = 10
    var MontoRetiro= Cuentatres.saldo-DineroRetiro
    if(MontoRetiro<SaldoMin)
    { alert('LA CANTIDAD A RETIRAR ES MAYOR AL PERMITIDO')}
    else 
    {  Cuentatres.saldo=MontoRetiro
        alert('Tu saldo actual es: '+Cuentatres.saldo )
    }
}

function Return2(){
    botonRetiroC1.classList.remove('none')
    botonSaldoC1.classList.remove('none')
    botonIngresoC1.classList.remove('none')

    ContainerRetiro.classList.add('none')
    ContainerIngreso.classList.add('none')
    CantidadActual1.classList.add('none')
    regresar2.classList.add('none')

}

function ingresarInvisibilidad(){

    ContainerIngreso.classList.remove('none')
    botonIngresoC1.classList.remove('none')
    ContainerRetiro.classList.add('none')
    botonRetiroC1.classList.add('none')
    CantidadActual1.classList.add('none')
    botonSaldoC1.classList.add('none')
    regresar2.classList.remove('none')
}


function CerrarSesion(){

    window.open("index.html","_self")
}



botonSaldoC1.addEventListener('click',consultaSaldoC1)
botonIngresoC1.addEventListener('click', ingresarInvisibilidad)
botonMontoC1.addEventListener('click',ingresarSaldoC1)
botonRetiroC1.addEventListener('click',retirarInvisibilidad)
botonMontoRetiroC1.addEventListener('click',retirarSaldoC1)



regresar2.addEventListener('click',Return2)
Logout.addEventListener('click',CerrarSesion)
//CUENTAS
//No mayor a 990 y no menor a 10
var Cuentauno={
    nombre:'Lizeth', 
    saldo:800, 
    contrasena:'123'
}

var Cuentados={
    nombre:'Fabian', 
    saldo:500, 
    contrasena:'321'
}

var Cuentatres={
    nombre:'Ezequiel', 
    saldo:100, 
    contrasena:'xd'
}



//Contrasena CUENTA 1
var ContrasenaC1 = document.getElementById('ContrasenaC1')
var BotonC1 = document.getElementById('BotonC1')
var Cuenta1= document.getElementById('Cuenta1') //boton
var askC1 = document.getElementById('askC1') // Input


//Contrasena CUENTA 2
var ContrasenaC2 = document.getElementById('ContrasenaC2')
var BotonC2 = document.getElementById('BotonC2')
var Cuenta2= document.getElementById('Cuenta2') //boton
var askC2 = document.getElementById('askC2') // Input

//Contrasena CUENTA 3
var ContrasenaC3 = document.getElementById('ContrasenaC3')
var BotonC3 = document.getElementById('BotonC3')
var Cuenta3= document.getElementById('Cuenta3')//boton
var askC3 = document.getElementById('askC2') // Input

// REturn
var regresar= document.getElementById('regresar')//boton


function Return(){
    Cuenta1.classList.remove('none')
    Cuenta2.classList.remove('none')
    Cuenta3.classList.remove('none')
    ContrasenaC1.classList.add('none')
    ContrasenaC2.classList.add('none')
    ContrasenaC3.classList.add('none')
    regresar.classList.add('none')
}


function visibilidadC1(){
    ContrasenaC1.classList.remove('none')
    Cuenta2.classList.add('none')
    Cuenta3.classList.add('none')
    regresar.classList.remove('none')
} 

function visibilidadC2(){
    ContrasenaC2.classList.remove('none')
    Cuenta1.classList.add('none')
    Cuenta3.classList.add('none')
    regresar.classList.remove('none')
} 

function visibilidadC3(){
    ContrasenaC3.classList.remove('none')
    Cuenta1.classList.add('none')
    Cuenta2.classList.add('none')
    regresar.classList.remove('none')
} 

function passwordC1() {

    //var PasswordC1 = askC1.value.toLowerCase()
    if (askC1.value===Cuentauno.contrasena){
        alert('Ingresando...')
        window.open("lizeth.html","_self")
    }
    else
        alert('Contraseña Incorrecta')

    ContrasenaC1.classList.add('none')
    }

function passwordC2() {

        //var PasswordC1 = askC1.value.toLowerCase()
        if (askC2.value===Cuentados.contrasena){
            alert('Ingresando...')
            window.open("kevin.html","_self")
        }
        else
            alert('Contraseña Incorrecta')
    
        ContrasenaC2.classList.add('none')
        }

function passwordC3() {

    //var PasswordC3 = askC1.value.toLowerCase()
    if (askC3.value===Cuentatres.contrasena){
        alert('Ingresando...')
        window.open("ezequiel.html","_self")
    }
    else
        alert('Contraseña Incorrecta')

    ContrasenaC3.classList.add('none')
    }



    BotonC1.addEventListener('click', passwordC1)
    BotonC2.addEventListener('click', passwordC2)
    BotonC3.addEventListener('click', passwordC3)

    Cuenta1.addEventListener('click', visibilidadC1)
    Cuenta2.addEventListener('click', visibilidadC2)
    Cuenta3.addEventListener('click', visibilidadC3)

    regresar.addEventListener('click',Return)

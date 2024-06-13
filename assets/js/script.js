function validar(){
    //Aqui se validan que los campos contengan valores
    validarVacio("nombre");
    validarVacio("apellido");
    validarVacio("email");
    validarLongitud("telefono");
    validarVacio("rut");
}
function validarVacio(idCampo){ //este revisa si el campo esta vacio o no
    // se recupera el elemento
    let elemento = document.getElementById(idCampo);
    console.log(elemento);
    //luego se recupera el valor del campo
    let valor = elemento.value;
    console.log(valor);
    let eParrafo = document.getElementById("p"+idCampo);
    if(valor.trim()==""){ //se revisa si el campo esta vacio
        console.log("No hay nada")
        elemento.style.borderColor = "red"; //se mantiene
        eParrafo.style.display = "block";
    }else{
        console.log("algo Hay")
        elemento.style.borderColor = "green";
        eParrafo.style.display = "none";
        const td = document.getElementById("td"+idCampo); //una vez se obtiene, el campo es aplicado a la tabla en su lugar apropiado
        td.textContent = valor
        elemento.style.display = "none"; //para dar con el boton de actualizar, cuando se ingresa un valor que es valido, el input es ocultado hasta que se presione el boton de actualizar
    }
}
function validarLongitud(idCampo){ //similar al previo, pero revisa si es un numero y uno de 9 digitos, exlusivo al telefono
    //Aqui se recupera el campo
    let elemento = document.getElementById(idCampo);
    console.log(elemento);
    //Luego el valor del campo
    let valor = elemento.value;
    console.log(valor);
    console.log(isNaN(valor))
    let eParrafo = document.getElementById("p"+idCampo);
    if(isNaN(valor)){//true si es un caracter
        eParrafo.innerText = "Debes ingresar un numero";
        eParrafo.style.display = "block";
    }
    else if(valor < 0){//se revisa si el numero es negativo
        eParrafo.innerText = "No puede ser Negativo";
        eParrafo.style.display = "block";
    }
    else{
        if(valor.trim().length == 9){ //aqui es cuando se aplica apropiadamente
            console.log("algo Hay")
            elemento.style.borderColor = "green";
            eParrafo.style.display = "none";
            const td = document.getElementById("td"+idCampo); //aqui se obtiene la posicion del campo en la tabla
            td.textContent = valor
            elemento.style.display = "none";
        }else{ // este ultimo es mas en general si es invalido en general
            console.log("No hay nada")
            elemento.style.borderColor = "red";
            eParrafo.style.display = "block";
            eParrafo.innerText = "Debes ingresar tu Telefono"; //lo mismo, agrege esta nueva linea por si otra invalidacion cambio el texto
        }
    }
    //cuando es valido con estos campos el borde pasa a ser verde y el eparrafo que indique que esta mal se pone en none, quedando invisible
}
function cambiarContraste(){ //este es del boton para cambiar el contraste.
let eBody = document.body;  //se recuperan los elemento a cambiar
let fondo = eBody.style.backgroundColor;
let eH1 = document.getElementsByClassName("titulo");
//console.log(eH1);
//console.log(eH1[0]);
//console.log(eH1[1]);
let inputs = document.getElementsByTagName("input");
console.log(inputs)

//console.log(fondo);
if(fondo == "aqua"){  //este seria el primer ciclo, cambia a negro
    eBody.style.backgroundColor = "black";
    for (let index = 0; index < eH1.length; index++) {
        const element = eH1[index];
        element.style.color = "black";
    }

    for (let index = 0; index < inputs.length; index++) {
        const element = inputs[index];
        element.style.borderColor = "black";
    }
    //eH1[0].style.color = "purple";
    //eH1[1].style.color = "purple";
}else{  //en este otro, se devuelve a ser el color previo
    eBody.style.backgroundColor = "aqua";
    for (let index = 0; index < eH1.length; index++) {
        const element = eH1[index];
        element.style.color = "aqua";
    }

    
    for (let index = 0; index < inputs.length; index++) {
        const element = inputs[index];
        element.style.borderColor = "aqua";
    }
    // eH1[0].style.color = "black";
    //eH1[1].style.color = "black";
}

//aqui deberia haber el de cambiar la fuente
}
function actualizar(){
    reactivar("nombre")
    reactivar("apellido")
    reactivar("email")
    reactivar("telefono")
    reactivar("rut")
}
function reactivar(){
    let elemento = document.getElementById(idCampo);
    console.log(elemento);
    elemento.style.display = "block";  //se supone que esto reactivaria los campos para ser modificados
}

//no me dio tiempo para dar una funcion de borrar para el boton
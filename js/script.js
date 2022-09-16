const Pedido = {};
function nombre(){
    let nombre = document.getElementById("nombre");
    Pedido.push(nombre.value)
    console.log(Pedido)
}
function direccion(){
    let direccion = document.getElementById("direccion");
    Pedido.push(direccion.value)
    console.log(Pedido)
}
function seleccionarTalla(){
    let talla = document.querySelector("#select_talla");
    Pedido.push(talla.value)
    console.log(Pedido)
}
function selectColor(){
    let color;
    if(document.getElementById("blanco").checked){
        color = (blanco.value)
    }
    else if(document.getElementById("negro").checked){
        color = (negro.value)
    }
    else if(document.getElementById("rojo").checked){
        color = (rojo.value)
    }
    Pedido.push(color)
    console.log(Pedido)
}
function cantidad(){
    let cantidad = document.getElementById("cantidad");
    Pedido.push(cantidad.value)
    console.log(Pedido)
}
function seleccionPolera(){
    let polera;
    if(document.getElementById("polera1").checked){
        polera = (polera1.value)
    }
    else if(document.getElementById("polera2").checked){
        polera = (polera2.value)
    }
    else if(document.getElementById("polera3").checked){
        polera = (polera3.value)
    }
    Pedido.push(polera)
    console.log(Pedido)
   
}


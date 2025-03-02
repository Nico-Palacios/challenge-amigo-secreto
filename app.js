// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = [];

function agregarAmigo(){
   let amigo = document.getElementById("amigo").value;
   amigo == '' ? alert('Por favor ingrese un nombre valido') : listaDeAmigos.push(amigo);
   limpiarCaja();
   console.log(listaDeAmigos);
}

function limpiarCaja(){
    let limpia = document.querySelector('#amigo');
    limpia.value = '';
}



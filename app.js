// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
   let amigo = document.getElementById("amigo").value;
   amigo == '' ? alert('Por favor ingrese un nombre valido') : amigos.push(amigo);
   limpiarCaja();
   recorrerLista()
   console.log(amigos);
}

function limpiarCaja(){
    let limpia = document.querySelector('#amigo');
    limpia.value = '';
}

function recorrerLista(){
    let listaHTML = document.querySelector("#listaAmigos");
    listaHTML.innerHTML = '';
    for (let i = 0 ; i < amigos.length ; i++){
        let elemento = document.createElement('li');
        elemento.textContent = amigos[i];
        listaHTML.appendChild(elemento);
    }
}

function sortearAmigo(){
    if (amigos == ''){
        alert('No se a ingresado el nombre de ningun amigo ! ! !')
    }else{
        let amigoSorteado = document.querySelector('#resultado');
        let amigoSecreto = amigos[Math.floor(Math.random()*(amigos.length))];
        let resultado = document.createElement('li');
        let listaHTML = document.querySelector("#listaAmigos");
        listaHTML.innerHTML = '';
        amigoSorteado.textContent = (`El amigo secreto sorteado es ${amigoSecreto}`)
        amigoSorteado.appendChild(resultado);
    }
    
}

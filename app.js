
let amigo = []; 


function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombrarAmigo = inputAmigo.value;

    if (amigo.includes(nombrarAmigo)) {
        alert ("El nombre ya está en la lista, si dos o más amigos tienen el mismo nombre escríbelos de forma diferente");
        return;
} else if(!nombrarAmigo) {
    alert("Debe llenar la casilla con un nombre para agregar"); 
} else {
amigo.push(nombrarAmigo);
inputAmigo.value = "";
inputAmigo.focus();
renderizarAmigos();
}
};

function sortearAmigo() {
    if (amigo.length === 0) {
        alert("Debe agregar amigos para poder sortear");
        return;
    }
    let amigoElegido = amigo[Math.floor(Math.random() * amigo.length)]; 
    let resultado = document.getElementById ("resultado");
    resultado.innerHTML = `El elegido es: ${amigoElegido}`;
    

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
}

function renderizarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for(let i = 0; i < amigo.length; i++){
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
}

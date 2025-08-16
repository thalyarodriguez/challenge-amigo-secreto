// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Array para almacenar los nombres
let amigos =[];

// Función para agregar amigos
function agregarAmigo(){
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    //Validamos entrada
    if (nombre === ""){
        alert("Por favor, inserte un nombre.");
        return;
    }

    //Agregamos el nombre al array
    amigos.push(nombre);

    //Limpiamos el campo de entrada
    input.value = "";

    //Actualizamos la lista
    actualizarLista();
}

// Función para actualizar la lista de amigos
function actualizarLista(){
    const lista = document.getElementById("listaAmigos");

    // Limpiamos la lista de antes de volver a rederizar
    lista.innerHTML = "";

    // Iteramos sobre el arreglo
    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

// función para sortear los amigos
function sortearAmigo(){
    const resultado = document.getElementById("resultado");
    const lista = document.getElementById("listaAmigos");
    
    //Validar que haya amigos disponibles
    if (amigos.length === 0){
        alert("No hay amigos disponibles para el sorteo.");
        return;
    }

    //Limpiamos el resultado previo
    resultado.innerHTML = "";

    // Seleccionamos un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    //Mostramos el resultado
    const itemResultado = document.createElement("li");
    itemResultado.innerHTML = `El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>`;
    resultado.appendChild(itemResultado);

    lista.innerHTML = "";
    amigos = [];
}

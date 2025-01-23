// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.// Selecciona los elementos del DOM
const inputNombre = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const botonAgregar = document.querySelector('.button-add');
const botonSortear = document.querySelector('.button-draw');

// Crea un arreglo para almacenar los nombres de los amigos
let amigos = [];

// Agrega un evento de clic al botón "Agregar"
botonAgregar.addEventListener('click', agregarAmigo);

// Agrega un evento de clic al botón "Sortear"
botonSortear.addEventListener('click', sortearAmigo);

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtiene el valor del input de texto
    const nombre = inputNombre.value.trim();

    // Verifica si el nombre no está vacío
    if (nombre !== '') {
        // Agrega el nombre a la lista de amigos
        amigos.push(nombre);

        // Limpia el input de texto
        inputNombre.value = '';

        // Actualiza la lista de amigos en el DOM
        actualizarListaAmigos();
    } else {
        // Muestra un mensaje de error si el nombre está vacío
        alert('Por favor, ingresa un nombre válido');
    }
}

// Función para actualizar la lista de amigos en el DOM
function actualizarListaAmigos() {
    // Limpia la lista de amigos en el DOM
    listaAmigos.innerHTML = '';

    // Recorre la lista de amigos y agrega cada nombre a la lista en el DOM
    amigos.forEach((amigo, indice) => {
        const itemLista = document.createElement('li');
        itemLista.textContent = `${indice + 1}. ${amigo}`;
        listaAmigos.appendChild(itemLista);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    // Verifica si la lista de amigos no está vacía
    if (amigos.length > 0) {
        // Selecciona un amigo al azar de la lista
        const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

        // Muestra el resultado en el DOM
        resultado.textContent = `El amigo sorteado es: ${amigoSorteado}`;
    } else {
        // Muestra un mensaje de error si la lista de amigos está vacía
        alert('Por favor, agrega amigos a la lista antes de sortear');
    }
}

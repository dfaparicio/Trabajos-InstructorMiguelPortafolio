const prompt = require("prompt-sync")();

function saludarDespues(nombre, callback, tiempo) {
    setTimeout(() => {
        callback(nombre)  
    }, tiempo); 
}

function mostrarsaludo(nombre) {
    console.log(`👋 ¡Hola, ${nombre}! ¿Cómo estás?`);
}

    const A = prompt("Ingrese   ");
    const tiempo = parseInt(A);

saludarDespues(`Ana`, mostrarsaludo, tiempo)



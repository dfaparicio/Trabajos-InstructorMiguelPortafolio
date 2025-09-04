const prompt = require("prompt-sync")();

function preparandodesayuno(callback) {
console.log("Preparando panqueques...");
        setTimeout(() => {
        callback(`✅ Panqueques listos para servir..........`)  
    }, 3000); 
}

function servirdesayuno(mensaje) {
console.log(mensaje);

        setTimeout(() => {
        console.log(`✅ Jugo de naranja servido`);
    }, 3000); 
    
}

preparandodesayuno(servirdesayuno)

function descargarArchivo(nombreArchivo, callback) {
console.log(` Descargando ${nombreArchivo}...`);
    setTimeout(() => {
        callback(` Archivo ${nombreArchivo} descargado.`)  
    }, 4000); 
}

function procesarArchivo(mensaje, callback) {
console.log(" Procesando archivo...");
    setTimeout(() => {
        callback(` Archivo procesado exitosamente.`)  
    }, 2000);
}


function enviarcorreo(mensaje, callback) {
console.log(mensaje);

    setTimeout(() => {
        callback(` Correo de confirmación enviado.`)  
    }, 1000);

}

function finalizarProceso(mensaje) {
console.log(mensaje);
}

descargarArchivo("documento.pdf", function(mensajeDescarga) {
console.log(mensajeDescarga);

procesarArchivo(mensajeDescarga, function(mensajeProcesado) {

enviarcorreo(mensajeProcesado, function(mensajecorreo) {
console.log(mensajecorreo);


finalizarProceso("Todo el proceso ha finalizado con éxito.");

});
});
});

const ingredientes = [
  { nombre: "Pollo", tiempo: 1500 },
  { nombre: "Arroz", tiempo: 1000 },
  { nombre: "Verduras", tiempo: 1200 },
  { nombre: "Salsa", tiempo: 800 },
  { nombre: "Especias", tiempo: 500 }
];


const cocineros = [
  { nombre: "Cocinero 1", ingredientes: ["Pollo", "Salsa"] },
  { nombre: "Cocinero 2", ingredientes: ["Arroz", "Especias"] },
  { nombre: "Cocinero 3", ingredientes: ["Verduras"] }
];


function prepararIngredientesCocinero(cocinero) {
  return new Promise((resolve) => {
    const tiempoAleatorio = Math.floor(Math.random() * 2000) + 1000;

    console.log(`${cocinero.nombre} está preparando: ${cocinero.ingredientes.join(", ")}`);

    setTimeout(() => {
      resolve(`${cocinero.nombre} ha terminado de preparar sus ingredientes.`);
    }, tiempoAleatorio);
  });
}


function iniciarPreparacion(callback) {
  const promesas = cocineros.map(cocinero => prepararIngredientesCocinero(cocinero));

  Promise.all(promesas).then(resultados => {
    callback(resultados);
  });
}


function confirmarPedido(mensajes, callback) {
  mensajes.forEach(mensaje => console.log(mensaje));
  setTimeout(() => {
    callback("✅ Pedido listo. Todos los cocineros han terminado.");
  }, 1000);
}


function finalizarProceso(mensaje) {
  console.log(mensaje);
}


iniciarPreparacion(function (mensajesCocineros) {
  confirmarPedido(mensajesCocineros, function (mensajeFinal) {
    finalizarProceso(mensajeFinal);
  });
});
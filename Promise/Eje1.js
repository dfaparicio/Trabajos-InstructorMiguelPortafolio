let nombres = [
  { id: 1, nombre: "Diego" },
  { id: 2, nombre: "Fernando" },
  { id: 3, nombre: "Nando" },
];

let getsaludarDespuesDe = (id) => {
  return new Promise((resolve, reject) => {
    let mostrarNombre = nombres.find((item) => item.id == id);
    if (mostrarNombre == undefined) {
      reject("No existe el nombre");
    } else {
      resolve(`¡Hola, ${mostrarNombre.nombre}! ¿Como estás? `);
    }
  });
};

getsaludarDespuesDe(3)
  .then((nombre) => {
    console.log(nombre);
  })
  .catch((error) => {
    console.log(error);
  });

let archivo = [
  { id: 1, nombre: "✅ Descargando archivo..." },
  { id: 2, nombre: "✅ Descargando archivo..." },
  { id: 3, nombre: "✅ Descargando archivo..." },
];

let archivoDescargado = [
  { id: 1, nombre: "Archivo descargado. ✅", idarchi: 1 },
  { id: 2, nombre: "Archivo descargando....", idarchi: 2 },
  { id: 3, nombre: "Fallo descarga.", idarchi: 3 },
];

let procesoArchivo = [
  { id: 1, nombre: "Procesando archivo...", idarchi: 1 },
  { id: 2, nombre: "Procesando archivo...", idarchi: 2 },
  { id: 3, nombre: "Procesando archivo...", idarchi: 3 },
];

let archivoProcesado = [
  { id: 1, nombre: "Archivo procesado exitosamente. ✅", idarchi: 1 },
  { id: 2, nombre: "Archivo en proceso.", idarchi: 2 },
  { id: 3, nombre: "Fallo proceso de archivo.", idarchi: 3 },
];

let envioCorreo =[
  {id:1 , nombre: "Correo enviado exitosamente ✅"}
]

let getdescargandoArchivo = (id) => {
  return new Promise((resolve, reject) => {
    let mostrarArchivo = archivo.find((item) => item.id == id);
    if (!mostrarArchivo) {
      reject("No esta desacargando el archivo");
    } else {
      resolve(mostrarArchivo);
    }
  });
};

let getarchivoDescargado = (archivo) => {
  return new Promise((resolve, reject) => {
    let archivoaDescargar = archivoDescargado.find(
      (item) => item.idarchi == archivo.id
    );
    if (!archivoaDescargar) {
      reject("Proceso de descarga fallo");
    } else {
      resolve(archivoaDescargar);
    }
  });
};

let getprocesoArchivo = (descargado) => {
  return new Promise((resolve, reject) => {
    let procesoaRealizar = procesoArchivo.find(
      (item) => item.idarchi == descargado.idarchi
    );
    if (!procesoaRealizar) {
      reject("No se esta realizando ningun proceso");
    } else {
      resolve(procesoaRealizar);
    }
  });
};

let getarchivoProcesado = (estado) => {
  return new Promise((resolve, reject) => {
    let estadoArchivo = archivoProcesado.find((item) => item.idarchi == estado.id);
    if(!estadoArchivo){
      reject("No hay estado existente del archivo")
    } else {
      resolve(estadoArchivo)
    }
  });
};


getdescargandoArchivo(4)
  .then((archivo) => {
    console.log(archivo.nombre);

    getarchivoDescargado(archivo)
      .then((descargado) => {
        console.log(descargado.nombre);

        getprocesoArchivo(descargado)
          .then((proceso) => {
            console.log(proceso.nombre);

            getarchivoProcesado(proceso)
            .then((estado) => {
              console.log(estado.nombre);
              
            })
          })





          .catch((error) => {
            console.log(error);
          });
      })

      .catch((error) => {
        console.log(error);
      });
  })

  .catch((error) => {
    console.log(error);
  });

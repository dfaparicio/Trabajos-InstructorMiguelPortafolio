let preparando = [
  { id: 1, nombre: "Preparando Desayuno......" },
  { id: 2, nombre: "Preparando Almuerzo......" },
  { id: 3, nombre: "Preparando Cena......." },
];

let jugo = [
  { id: 1, idPrepa: "Naranja", idpreparando: 1},
  { id: 2, idPrepa: "Mandarina", idpreparando: 2},
];

let getprepararDesayuno = (id) => {
  return new Promise((resolve, reject) => {
    let mostrarNombre = preparando.find((item) => item.id == id);
    if (mostrarNombre == undefined) {
      reject("No existe preparacion");
    } else {
      resolve(mostrarNombre);
    }
  });
};

let getservirElJugo = (Jugos) => {
  return new Promise((resolve, reject) => {
    let jugoaServir = jugo.find((item) => item.idpreparando == Jugos.id);
    if(jugoaServir == undefined){
      reject(`${Jugos.nombre} no tiene jugo`)
    } else {
      resolve(`${Jugos.nombre} con jugo de ${jugoaServir.idPrepa}`)
    }
  })
}



getprepararDesayuno(3)

  .then((preparacion) => {
    getservirElJugo(preparacion)

    .then((jugoListo) => {
      console.log(jugoListo);
    })
    
    .catch((err) => {
      console.log(err);
    })
  })

  .catch((error) => {
    console.log(error);
  });

let empleados = [
  { id: 1, nombre: "Miguel" },
  { id: 2, nombre: "Yenny" },
  { id: 3, nombre: "MCamila" },
];
let salarios = [
  { id: 1, salario: 1000, idempleado: 1 },
  { id: 2, salario: 2000, idempleado: 2 },
];
let getEmpleados = (id) => {
  return new Promise((resolve, reject) => {
    let empleado = empleados.find((item) => item.id == id);
    if (empleado == undefined) {
      reject("El empleado no existe");
    } else {
      resolve(empleado);
    }
  });
};
let getSalario = (empleado) => {
  return new Promise((resolve, reject) => {
    let salarioEmpleado = salarios.find((item) => item.idempleado == empleado.id);
    if (salarioEmpleado == undefined) {
      reject(`El empleado ${empleado.nombre} no tiene salario `);
    } else {
      resolve(`El empleado ${empleado.nombre} gana${salarioEmpleado.salario} dolares `);
    }
  });
};

getEmpleados(1)
  .then((empleado) => {
    getSalario(empleado)
      .then((salario) => {
        console.log(salario);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((error) => {
    console.log(error);
  });
//
//El empleado xx gana yyy
//El empleado yy no tiene salario
//El empleado zz no existe

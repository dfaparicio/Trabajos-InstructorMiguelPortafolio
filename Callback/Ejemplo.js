//callbacks
//promesas
//async-await
// const saludar =(callback)=>{
//      setTimeout(() => {
//         console.log("Hola mundo!!!!");
//         callback("mensaje como parametro ya termino")
//     }, 2000);
//  }

// const miCallback=(mensaje)=>{
//     console.log(mensaje);
// }
//  saludar(miCallback )

// let empleados = [
//   { id: 1, nombre: "Miguel" },
//   { id: 2, nombre: "Yenny" },
//   { id: 3, nombre: "MCamila" },
// ];

// let salarios = [
//   { id: 1, sueldo: 1000, idempleado: 1 },
//   { id: 2, sueldo: 2000, idempleado: 2 },
// ];

// const infoEmpleado=(idempleado,callback)=>{
//     const empleado=empleados.find ( item=> item.id==idempleado )
//     callback(empleado)
// }

// const infoSalario=(idempleado,callback)=>{
//     const salario=salarios.find(item => item.idempleado==idempleado)
//     callback(salario)
// }

// infoEmpleado(3, (empleado)=>{
//     if(empleado==undefined){
//         console.log("El empleado no existe");
//     }else{
//         infoSalario(empleado.id,(salario)=>{
//             if(salario==undefined){
//                 console.log(`el empleado ${empleado.nombre} no tiene salario`);
//             }else{
//                 console.log(`el empleado ${empleado.nombre} gana ${salario.sueldo} dolares`);
//             }
//         })
       
//     }
   
// })
//
//el empleado xxx gana $$$ dolares
//el empleado xxx no tiene salario asignado
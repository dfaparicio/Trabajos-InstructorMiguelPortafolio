const ventas = [
  { id: 1, idarticulo: 101, cantidad: 2, fecha: "2024-08-01" },
  { id: 2, idarticulo: 102, cantidad: 1, fecha: "2024-08-01" },
  { id: 3, idarticulo: 103, cantidad: 3, fecha: "2024-08-02" },
  { id: 4, idarticulo: 101, cantidad: 4, fecha: "2024-08-02" },
  { id: 5, idarticulo: 101, cantidad: 1, fecha: "2024-08-03" },
  { id: 6, idarticulo: 104, cantidad: 1, fecha: "2024-08-03" },
  { id: 7, idarticulo: 102, cantidad: 7, fecha: "2024-08-04" },
  { id: 8, idarticulo: 101, cantidad: 1, fecha: "2024-08-04" },
  { id: 9, idarticulo: 102, cantidad: 1, fecha: "2024-08-05" },
  { id: 10, idarticulo: 103, cantidad: 2, fecha: "2024-08-05" },
];
const articulos = [
  { idarticulo: 101, nombre: "Articulo A" },
  { idarticulo: 102, nombre: "Articulo B" },
  { idarticulo: 103, nombre: "Articulo C" },
  { idarticulo: 104, nombre: "Articulo D" },
];

let encontrarVentas = () => {
  return new Promise((resolve, reject) => {
    let mastresVentas = ventas.filter((venta) => venta.cantidad > 3);
    if (mastresVentas.length === 0) {
      reject("No ventas mayores a 3");
    } else {
      resolve(mastresVentas);
    }
  });
};

let encontrarNombres = (nombre) => {
  return new Promise((resolve, reject) => {
    let nombreArticulo = articulos.find((item) => item.idarticulo == nombre.idarticulo);
    if (nombreArticulo == undefined) {
      reject("No existe nombre");
    } else {
      resolve(nombreArticulo);
    }
  });
};

encontrarVentas()
  .then((resultado) => {
    console.log("Las ventas mayores a tres son:");
    resultado.forEach((venta) => {
      console.log(
        `El id del articulo: ${venta.idarticulo}, y las ventas fueron: ${venta.cantidad}`
      );
    });

    encontrarNombres(resultado)
      .then((nombre) => {
        console.log(`Los nombres de los artiuclos son: ${nombre}`);
      })

      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });

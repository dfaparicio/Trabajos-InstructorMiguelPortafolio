const ventas = [
  { id: 1, idarticulo: 101, cantidad: 2, fecha: '2024-08-01' },
  { id: 2, idarticulo: 102, cantidad: 1, fecha: '2024-08-01' },
  { id: 3, idarticulo: 103, cantidad: 3, fecha: '2024-08-02' },
  { id: 4, idarticulo: 101, cantidad: 4, fecha: '2024-08-02' },
  { id: 5, idarticulo: 101, cantidad: 1, fecha: '2024-08-03' },
  { id: 6, idarticulo: 104, cantidad: 1, fecha: '2024-08-03' },
  { id: 7, idarticulo: 102, cantidad: 7, fecha: '2024-08-04' },
  { id: 8, idarticulo: 101, cantidad: 1, fecha: '2024-08-04' },
  { id: 9, idarticulo: 102, cantidad: 1, fecha: '2024-08-05' },
  { id: 10, idarticulo: 103, cantidad: 2, fecha: '2024-08-05' }
];

const articulos = [
  { idarticulo: 101, nombre: 'Articulo A' },
  { idarticulo: 102, nombre: 'Articulo B' },
  { idarticulo: 103, nombre: 'Articulo C' },
  { idarticulo: 104, nombre: 'Articulo D' }
];


const contarventas = ventas.reduce((acumulado, venta) => {
  acumulado[venta.idarticulo] = (acumulado[venta.idarticulo] || 0) + venta.cantidad;
  return acumulado;
}, {});


const masde3ventas = Object.keys(contarventas).filter(id => contarventas[id] > 3).map(Number);


const resumenVentas = articulos.filter(articulo => masde3ventas.includes(articulo.idarticulo)).map(articulo => ({
    nombre: articulo.nombre,id: articulo.idarticulo,cantidad: contarventas[articulo.idarticulo]
  }));


function Resultadomas3(callback) {
  setTimeout(() => {
    callback(`Estos son los IDs con más de 3 ventas: ${masde3ventas.join(", ")}`);
  }, 2000);
}


function Resultadonombres(callback) {
  setTimeout(() => {
    const mensajes = resumenVentas.map(
      item => `${item.nombre} tuvo ${item.cantidad} ventas`
    );
    callback(mensajes);
  }, 2000);
}


Resultadomas3(function (mensajeresultado) {
  console.log(mensajeresultado);

  Resultadonombres(function (mensajesFinales) {
    console.log("Resumen de ventas:");
    mensajesFinales.forEach(mensaje => console.log(mensaje));
  });
});
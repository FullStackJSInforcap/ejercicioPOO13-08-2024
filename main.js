import DetallesOrden from "./detallesOrden.js";
import OrdenCompra from "./ordenCompra.js";
import Producto from "./producto.js";

let productoUno = new Producto('123456', 'nombre uno', 5000);
let productoDos = new Producto('234567', 'nombre dos', 7000);
let productoTres = new Producto('345678', 'nombre tres', 1000);
let productoCuatro = new Producto('456789', 'nombre cuatro', 18000);
console.log(productoUno, productoDos, productoTres, productoCuatro);
let detalleUno = new DetallesOrden('1', productoUno, 4);
let detalleDos = new DetallesOrden('2', productoDos, 4);
let detalleTres = new DetallesOrden('3', productoTres, 4);
let detalleCuatro = new DetallesOrden('4', productoCuatro, 4);
console.log(detalleUno.calcularMontoDetalle());
console.log(detalleDos.calcularMontoDetalle());
console.log(detalleTres.calcularMontoDetalle());
console.log(detalleCuatro.calcularMontoDetalle());
let detalles = [detalleUno, detalleDos, detalleTres, detalleCuatro];
let orden = new OrdenCompra('1', '13-08-2024', '14-08-2024', detalles);
console.log(orden.calcularTotalOrden());
console.log(orden.calcularTotalOrdenReduce());
console.log(orden.calcularTotalRefactorizado());



export default class DetallesOrden{

    #idDetalleOrden;
    #producto;
    #cantidad;

    constructor(idDetalleOrden, producto, cantidad){
        this.#idDetalleOrden = idDetalleOrden;
        this.#producto = producto;
        this.#cantidad = cantidad;
    }

    get idDetalleOrden(){
        return this.#idDetalleOrden;
    }

    set idDetalleOrden(idDetalleOrden){
        this.#idDetalleOrden = idDetalleOrden;
    }

    get producto(){
        return this.#producto;
    }

    set producto(producto){
        this.#producto = producto;
    }

    get cantidad(){
        return this.#cantidad;
    }

    set cantidad(cantidad){
        this.#cantidad = cantidad;
    }

    calcularMontoDetalle(){
        return this.cantidad * this.producto.precioUnitario;
    }

}
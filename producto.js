export default class Producto{

    #idProducto;
    #nombreProducto;
    #precioUnitario;

    constructor(idProducto, nombreProducto, precioUnitario){
        this.#idProducto = idProducto;
        this.#nombreProducto = nombreProducto;
        this.#precioUnitario = precioUnitario;
    }

    get idProducto(){
        return this.#idProducto;
    }

    set idProducto(idProducto){
        this.#idProducto = idProducto;
    }

    get nombreProducto  (){
        return this.#nombreProducto ;
    }

    set nombreProducto  (nombreProducto   ){
        this.#nombreProducto     = nombreProducto   ;
    }

    get precioUnitario(){
        return this.#precioUnitario;
    }

    set precioUnitario(precioUnitario){
        this.#precioUnitario = precioUnitario;
    }
    
}
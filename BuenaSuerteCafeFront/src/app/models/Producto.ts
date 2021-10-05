export class Producto {

  idProducto:number;
  nombre:string;
  descripcion:string;
  cantidad: number;
  inventario:number;
  precio:number;
  imagen:string;

  constructor(idProducto = 0, nombre = '', cantidad=0, descripcion = '', inventario = 0, precio = 0, imagen=''){
    this.idProducto = idProducto
    this.nombre = nombre
    this.descripcion = descripcion
    this.cantidad = cantidad
    this.inventario = inventario
    this.precio = precio
    this.imagen = imagen
  }

}

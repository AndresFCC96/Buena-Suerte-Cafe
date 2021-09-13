export class Producto {

  id_producto:number;
  nombre:string;
  descripcion:string;
  cantidad: number;
  inventario:number;
  precio:number;
  imagen:string;

  constructor(id_producto = 0, nombre = '', cantidad=0, descripcion = '', inventario = 0, precio = 0, imagen=''){
    this.id_producto = id_producto
    this.nombre = nombre
    this.descripcion = descripcion
    this.cantidad = cantidad
    this.inventario = inventario
    this.precio = precio
    this.imagen = imagen
  }

}

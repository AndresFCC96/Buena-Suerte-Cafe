import { Producto } from './Producto';

export class CartItem {
  id: number;
  productoId: number;
  nombreProducto: string;
  cantidad: number;
  precio: number;

  constructor(id: number, producto: Producto, cantidad = 1) {
    this.id = id;
    this.productoId = producto.id_producto;
    this.nombreProducto = producto.nombre;
    this.precio = producto.precio;
    this.cantidad = cantidad;
  }
}

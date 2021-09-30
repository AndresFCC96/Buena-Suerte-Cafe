import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/ItemCart';
import { Producto } from 'src/app/models/Producto';
import { MensajeroService } from 'src/app/services/mensajero.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems: any[] = [];

  cartTotal: number = 0;

  nombre: string = localStorage.getItem("nombre");

  productoNuevo: Producto = new Producto();

  constructor(private msg: MensajeroService) { }

  ngOnInit(): void {
    this.addCarrito();
    this.deleteCarrito();
    console.log(this.cartItems.length);
  }

  addCarrito() {
    this.msg.obtenerMensaje().subscribe(producto => {
      this.productoNuevo = <Producto>producto;
      this.cartItems.push(producto);
      this.calcularTotal();
      console.log(this.cartItems.length);
    })
  }

  deleteCarrito() {
    let productoAEliminar: Producto = new Producto();
    let posicion = 0;
    this.msg.obtenerMensaje().subscribe(producto => {
      productoAEliminar = <Producto>producto;
      for (let index = 0; index < this.cartItems.length; index++) {
            if(this.cartItems[index] === productoAEliminar){
              posicion = index;
            }
          }
    })
    this.cartTotal -= productoAEliminar.precio;
    this.cartItems = this.cartItems.filter(item => item !== productoAEliminar)
    console.log(this.cartItems)
    delete this.cartItems[posicion];

  }

  calcularTotal(){
    this.cartTotal = 0;
    for (let index = 0; index < this.cartItems.length; index++) {
      this.cartTotal += parseInt(this.cartItems[index].precio);


      // console.log("El valor del producto actual es de: " + this.cartItems[index].precio)
    }
  }

  // restarTotal(){
  //   for (let index = 0; index < this.cartItems.length; index++) {
  //     this.cartTotal -= parseInt(this.cartItems[index].precio);
  //   }
  // }
}

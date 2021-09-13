import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/ItemCart';
import { Producto } from 'src/app/models/Producto';
import { MensajeroService } from 'src/app/services/mensajero.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems: any[] = [];

  cartTotal = 0;

  productoNuevo: Producto = new Producto();

  constructor(private msg: MensajeroService) { }

  ngOnInit(): void {
    this.addCarrito();

  }

  addCarrito() {
    this.msg.obtenerMensaje().subscribe(producto => {
      this.cartItems.push(producto);
    })
  }
}

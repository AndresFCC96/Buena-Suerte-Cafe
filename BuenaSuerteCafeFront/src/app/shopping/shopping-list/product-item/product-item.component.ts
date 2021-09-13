import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/models/Producto';
import { MensajeroService } from 'src/app/services/mensajero.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productoItem: Producto = new Producto();

  constructor(private msg: MensajeroService) { }

  ngOnInit(): void {
  }

  eventoAgregarAlCarrito() {
    this.msg.enviarMensaje(this.productoItem)
  }
}

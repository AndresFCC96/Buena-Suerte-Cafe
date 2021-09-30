import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/Producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-carcarousel',
  templateUrl: './carcarousel.component.html',
  styleUrls: ['./carcarousel.component.css']
})
export class CarcarouselComponent implements OnInit {

  public productos: Producto[] = [];

  constructor(public productoService: ProductoService) { }

  ngOnInit(): void {
    this.consultarProductos();
  }

  consultarProductos(): void{
    this.productoService.consultarTodosLosProductos().subscribe(data =>{
      this.productos = data;
    })
  }

}

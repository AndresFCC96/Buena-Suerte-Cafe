import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/models/Producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

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

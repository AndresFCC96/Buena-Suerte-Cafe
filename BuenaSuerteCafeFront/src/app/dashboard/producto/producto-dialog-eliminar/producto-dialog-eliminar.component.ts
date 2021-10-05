import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Producto } from 'src/app/models/Producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-dialog-eliminar',
  templateUrl: './producto-dialog-eliminar.component.html',
  styleUrls: ['./producto-dialog-eliminar.component.css']
})
export class ProductoDialogEliminarComponent implements OnInit {

  productosList: Producto[] = [];
  proId: number;

  constructor(private matDialogRef: MatDialogRef<Producto>,
    @Inject(MAT_DIALOG_DATA) data: any,
    private productoService: ProductoService,
    private snackBar: MatSnackBar) {
      if (data) {
        this.proId = data;
      }
    }

  ngOnInit(): void {
  }

  consultarProductos(){
    this.productoService.consultarTodosLosProductos().subscribe(data =>{
      this.productosList = data;
    })
  }
  
}

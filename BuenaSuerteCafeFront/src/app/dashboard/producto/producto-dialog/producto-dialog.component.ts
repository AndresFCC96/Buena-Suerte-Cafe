import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Producto } from 'src/app/models/Producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-dialog',
  templateUrl: './producto-dialog.component.html',
  styleUrls: ['./producto-dialog.component.css'],
})
export class ProductoDialogComponent implements OnInit {

  productosList: Producto[] = [];
  form: FormGroup;
  productos: Producto;
  proId: number;

  constructor(
    private formsBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<Producto>,
    @Inject(MAT_DIALOG_DATA) data: any,
    private productoService: ProductoService,
    private snackBar: MatSnackBar
  ) {
    if (data) {
      this.proId = data;
    }
  }

  ngOnInit(): void {
    this.form = this.formsBuilder.group({
      'nombre': '',
      'inventario': '',
      'precio': '',
      'imagen': '',
      'descripcion': '',
    });
    if (this.proId) {
      this.cargarProducto();
    }
  }

  cargarProducto() {
    this.productoService
      .consultarProductoPorId(this.proId)
      .subscribe((producto) => {
        console.log(producto);
        this.form.controls.nombre.setValue(producto.nombre);
        this.form.controls.inventario.setValue(producto.inventario);
        this.form.controls.precio.setValue(producto.precio);
        this.form.controls.descripcion.setValue(producto.descripcion);
        this.form.controls.imagen.setValue(producto.imagen);
      });
  }

  consultarProductos(){
    this.productoService.consultarTodosLosProductos().subscribe(data =>{
      this.productosList = data;
    })
  }

  guardarProducto() {
    let nombreP = this.form.controls.nombre.value;
    let inventarioP = this.form.controls.inventario.value;
    let precioP = this.form.controls.precio.value;
    let descripcionP = this.form.controls.descripcion.value;
    let imagenP = this.form.controls.imagen.value;
    let producto = new Producto();
    producto.nombre = nombreP;
    producto.inventario = inventarioP;
    producto.precio = precioP;
    producto.descripcion = descripcionP;
    producto.imagen = imagenP;
    console.log(producto);
    this.productoService.guardarProducto(producto).subscribe(
      (data) => {
        this.snackBar.open(`Se ha creado el producto con éxito!`, '×', {
          panelClass: 'error',
          verticalPosition: 'top',
          duration: 8000,
        });
        this.matDialogRef.close(data);
      },
      (e) => {
        console.log(e);
      }
    );
    this.consultarProductos();
  }

  editarProducto(): void {
    let nombreP = this.form.controls.nombre.value;
    let inventarioP = this.form.controls.inventario.value;
    let precioP = this.form.controls.precio.value;
    let producto = new Producto();
    producto.idProducto = this.proId;
    producto.nombre = nombreP;
    producto.inventario = inventarioP;
    producto.precio = Number(precioP);
    console.log(producto);
    this.productoService.actualizarProducto(producto).subscribe(
      (data) => {
      this.snackBar.open(`Se ha actualizado el producto con éxito!`, '×', {
        panelClass: 'error',
        verticalPosition: 'top',
        duration: 8000,
      });
      this.matDialogRef.close(data);
    });
    this.consultarProductos();
  }

  cancelar() {
    this.matDialogRef.close();
  }
}

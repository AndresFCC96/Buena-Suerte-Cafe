import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/Producto';
import { ProductoService } from 'src/app/services/producto.service';
import { environment } from 'src/environments/environment';
import { ProductoDialogEliminarComponent } from './producto-dialog-eliminar/producto-dialog-eliminar.component';
import { ProductoDialogComponent } from './producto-dialog/producto-dialog.component';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  productos: Producto[] = [];

  nombre: string = localStorage.getItem("nombre");
  rol: string = localStorage.getItem("rol");
  form: FormGroup;

  dataSource = new MatTableDataSource<Producto>(this.productos);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public displayedColumns: string[] = ['Nombre', 'Inventario', 'Precio', 'Acciones'];

  constructor(public router: Router,
    private formsBuilder:FormBuilder,
    private dialog: MatDialog,
    public productoService: ProductoService,
) { }

  ngOnInit(): void {

    // if(!this.nombre){
    //   this.router.navigate(['/Login']);
    // }else{
    //   if(this.rol != "Admin"){
    //     this.router.navigate(['']);
    //   }
    // }
    this.form = this.formsBuilder.group(
      {
          'nombre': '',
          'inventario': '',
          'precio': '',
      });
    this.consultarProductos();
  }

  consultarProductos(){
    this.productoService.consultarTodosLosProductos().subscribe(data =>{
      this.productos = data;
      this.dataSource = new MatTableDataSource<Producto>(data);
      this.dataSource.paginator = this.paginator;
    })
  }

  verProducto(): void{
    const dial = this.dialog.open(ProductoDialogComponent, {
        width: '850px',
        height: '480px',
    });
    dial.afterClosed().subscribe(resp => {
      if(resp){
        // this.listarPorFiltro();
        this.consultarProductos();
    }
    })
  }

  verProductoEditar(producto: Producto): void{
    const dial = this.dialog.open(ProductoDialogComponent, {
        width: '850px',
        height: '480px',
        data: producto.idProducto
    });
    dial.afterClosed().subscribe(resp => {
        if(resp){
          // this.listarPorFiltro();
          this.consultarProductos();
      }
    })
  }

  verProductoEliminar(producto: Producto): void{
    const dial = this.dialog.open(ProductoDialogEliminarComponent, {
        width: '650px',
        height: '200px',
        data: producto.idProducto
    });
    dial.afterClosed().subscribe(resp => {
        if(resp){
          // this.listarPorFiltro();
          this.consultarProductos();
      }
    })
  }

  cerrarSesion(){
    localStorage.clear();
    environment.isLogged = false;
    this.router.navigate(['']);
  }
}

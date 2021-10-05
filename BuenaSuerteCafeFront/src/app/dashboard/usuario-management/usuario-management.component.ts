import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-usuario-management',
  templateUrl: './usuario-management.component.html',
  styleUrls: ['./usuario-management.component.css']
})
export class UsuarioManagementComponent implements OnInit {

  listaUsuarios: Usuario[] = [];

  usuarios: Usuario[] = [

  ]

  nombre: string = localStorage.getItem("nombre");
  rol: string = localStorage.getItem("rol");
  form: FormGroup;

  dataSource = new MatTableDataSource<Usuario>(this.listaUsuarios);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public displayedColumns: string[] = ['nombre', 'apellido', 'email', 'rol','genero', 'acciones'];

  constructor(public router: Router,
    private formsBuilder:FormBuilder,
    private dialog: MatDialog,
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.consultarTodosLosUsuarios();
    if(!this.nombre){
      this.router.navigate(['/Login']);
    }else{
      if(this.rol != "Admin"){
        this.router.navigate(['']);
      }
    }
    this.form = this.formsBuilder.group(
      {
          'nombre': '',
          'apellido': '',
          'email': '',
          'rol': '',
          'genero': '',
      })

  }

  consultarTodosLosUsuarios(){
    this.usuarioService.consultarTodosLosUsuarios().subscribe(data => {
      this.listaUsuarios = data;
      this.dataSource = new MatTableDataSource<Usuario>(data);
      this.dataSource.paginator = this.paginator;
    })
  }

  cerrarSesion(){
    localStorage.clear();
    environment.isLogged = false;
    this.router.navigate(['']);
  }

}

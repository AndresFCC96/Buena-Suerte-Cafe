import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario;

  nombre: string = localStorage.getItem("nombre");
  apellido: string = '';
  rol: string = localStorage.getItem("rol");
  id: number = Number(localStorage.getItem("Id"));
  form: FormGroup;

  constructor(public router: Router,
    private formsBuilder:FormBuilder,
    private dialog: MatDialog,
    public usuarioService: UsuarioService) { }

  ngOnInit(): void {
    if(!this.nombre && this.rol != "Admin"){
      this.router.navigate(['/Login']);
    }
    this.form = this.formsBuilder.group(
      {
          'nombre': '',
          'apellido': '',
          'email': '',
          'rol': '',
          'genero': '',
          'password': '',
          'tipoDocumento': '',
          'numeroDocumento': '',
      })
      this.consultarUsuario();
  }

  consultarUsuario(){
    this.usuarioService.consultarUsuarioPorId(this.id).subscribe(data =>{
      this.usuario = data;
      this.form.controls.nombre.setValue(this.usuario.firstName);
      this.form.controls.apellido.setValue(this.usuario.lastname);
      this.form.controls.email.setValue(this.usuario.email);
      this.form.controls.genero.setValue(this.usuario.gender);
      this.form.controls.password.setValue(this.usuario.password);
      this.form.controls.tipoDocumento.setValue(this.usuario.documentype);
      this.form.controls.numeroDocumento.setValue(this.usuario.documentnumber);
      this.apellido = this.usuario.lastname;

    })
  }

  cerrarSesion(){
    localStorage.clear();
    environment.isLogged = false;
    this.router.navigate(['']);
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { Ciudad } from 'src/app/models/ciudad';
import { Departamento } from 'src/app/models/Departamento';
import { Usuario } from 'src/app/models/usuario';
import { CiudadService } from 'src/app/services/ciudad.service';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public departamentos: Departamento[] = [];
  public ciudades: Ciudad[] = [];
  public ciudadesQuery: Ciudad[] = [];
  public usuario: Usuario;
  form: FormGroup;
  departamento: number;
  // <option value='CE'>CEDULA EXTRANJERIA</option>
  // <option value='PA'>PASAPORTE</option>
  // <option value='CD'>CARNE</option>
  // <option value='SC'>SALVOCONDUCTO</option>
  // <option value='PE'>PERMISO ESPECIAL DE PERMANENCIA</option>
  generos = [
    {
      'abreviatura':'M',
      'descripcion':'Masculino'
    },
    {
      'abreviatura':'F',
      'descripcion':'Femenino'
    },
    {
      'abreviatura':'O',
      'descripcion':'Otro'
    }
  ];

  tiposDocumentos = [
    {
        'abreviatura':'CC',
        'descripcion':'Cedula'
    },
    {
        'abreviatura':'TI',
        'descripcion':'Tarjeta de identidad'
    },
    {
      'abreviatura':'NI',
      'descripcion':'Numero Identificacion Tributaria'
    },
  ];

  @ViewChild('matSelect') matSelect: MatSelect;

  constructor(public departamentoService: DepartamentoService,
    public ciudadService: CiudadService,
    private formsBuilder:FormBuilder,
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.form = this.formsBuilder.group(
      {
        'nombre':['',[Validators.required]],
        'apellido': ['',[Validators.required]],
        'email': ['',[Validators.required]],
        'tipoDocumento': ['',[Validators.required]],
        'numeroDocumento': ['',[Validators.required]],
        'telefono': [''],
        'direccion': ['',[Validators.required]],
        'ciudad': ['',[Validators.required]],
        'departamento': ['',[Validators.required]],
        'genero': ['',[Validators.required]],
        'password': ['',[Validators.required]],
        'passwordVerification': ['',[Validators.required]],
      }
    )
    this.consultarDepartamentos();
    this.consultarCiudades();

  }

  consultarDepartamentos(): void{
    this.departamentoService.consultarTodosLosDepartamentos().subscribe( data =>{
      this.departamentos = data
    });
  }

  consultarCiudades(): void{
    this.ciudadService.consultarTodasLasCiudades().subscribe(data => {
      this.ciudades = data
    });
  }

  consultarCiudadesPorDepartamento(departamento: number): void{
    this.ciudadService.consultarTodasLasCiudadesPorDepartamento(departamento).subscribe(data => {
      if(data){
        this.ciudadesQuery = data;
        console.log(data);
      }

    });
  }

  // ngAfterViewInit() {
  //   this.matSelect.valueChange.subscribe(value => {
  //       console.log(value);
  //   });
  // }

  onSelect(departamento: number) {
    if(departamento){
      this.consultarCiudadesPorDepartamento
    }
  }

  Registro(): void {

    let usuario:Usuario;
    usuario.firstName = this.form.controls.nombre.value;
    usuario.lastname = this.form.controls.apellido.value;
    usuario.email = this.form.controls.email.value;
    usuario.documentype = this.form.controls.tipoDocumento.value;
    usuario.documentnumber = this.form.controls.numeroDocumento.value;
    usuario.phone = this.form.controls.telefono.value;
    usuario.address = this.form.controls.direccion.value;
    usuario.gender = this.form.controls.genero.value;
    usuario.password = this.form.controls.password.value;
    // let fname = this.form.controls.nombre.value;
    // let lname = this.form.controls.apellido.value;
    // let email = this.form.controls.email.value;
    // let tdoc = this.form.controls.tipoDocumento.value;
    // let ndoc = this.form.controls.numeroDocumento.value;
    // let tel = this.form.controls.telefono.value;
    // let dir = this.form.controls.direccion.value;
    // let gen = this.form.controls.genero.value;
    // let pass = this.form.controls.password.value;
    // this.usuario.firstName = "Andres";
    // this.usuario.lastname = lname;
    // this.usuario.email = email;
    // this.usuario.password = pass;
    // this.usuario.gender = gen;
    // this.usuario.documentype = tdoc;
    // this.usuario.documentnumber = ndoc;
    // this.usuario.phone = tel;
    // this.usuario.address = dir;
    // this.usuario.role = 'Usuario';
    // this.usuario.createdby = 'ACAMPAZ';
    // this.usuario.creationdate = new Date();
    // console.log(fname, lname, email, tdoc, ndoc, tel, dir, gen, pass);
    this.usuarioService.guardarUsuario(usuario).subscribe();
  }
}

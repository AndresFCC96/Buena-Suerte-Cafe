import { Component, OnInit } from '@angular/core';
import { Ciudad } from 'src/app/models/ciudad';
import { Departamento } from 'src/app/models/Departamento';
import { Usuario } from 'src/app/models/usuario';
import { CiudadService } from 'src/app/services/ciudad.service';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public departamentos: Departamento[] = [];
  public ciudades: Ciudad[] = [];
  public usuario: Usuario = new Usuario(0, '', '', '', '', '', '', '', '', '', 'cliente', 0, 'A', '', new Date(), '', new Date());

  constructor(public departamentoService: DepartamentoService, public ciudadService: CiudadService) { }

  ngOnInit(): void {
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
}

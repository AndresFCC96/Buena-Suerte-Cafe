import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  persona = {
    nombre: "Andres",
    edad: 14
  }

  constructor() { }

  ngOnInit(): void {
    this.grabarDatos();
  }

  grabarDatos(){
    localStorage.setItem( "nombre", this.persona.nombre);
  }

  ingresar(){
    if(localStorage.getItem("nombre") === "Andres"){
      alert("Estas adentro");
    }
  }
}

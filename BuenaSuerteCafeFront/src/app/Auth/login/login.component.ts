import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import * as $ from "jquery";
import { data } from 'jquery';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  ValidarLogIn(): void {
    var pass:String = $("#password").val()?.toString()|| "";
    var email:String = $("#email").val()?.toString() || "";
    var usuario: Usuario = new Usuario(0, '', '', '', '', '', '', '', '', '', 'cliente', 0, 'A', '', new Date(), '', new Date());
    this.usuarioService.validateLogIn(email, pass).subscribe(data =>{
      usuario = data;
    });
    if(usuario.firstname != ''){
      location.href = "/admin";
    }
  }

}

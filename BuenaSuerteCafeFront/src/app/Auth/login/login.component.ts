import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;
  form: FormGroup;
  nombre: string ;

  constructor(public usuarioService: UsuarioService,
    private formsBuilder:FormBuilder,
    public router: Router,) { }

  ngOnInit(): void {
    this.form = this.formsBuilder.group(
      {
          'email':['',[Validators.required]],
          'password': ['',[Validators.required]]
      }
  )
  }


  ingresar(){
    if(localStorage.getItem("nombre") === "Andres"){
      alert("Estas adentro");
    }
  }
  ValidarLogIn(): void {
    let email = this.form.controls.email.value;
    let pass = this.form.controls.password.value;
    this.usuarioService.validateLogIn(email, pass).subscribe(data =>{
      if(data != null){
        this.usuario = data;
        this.nombre = this.usuario.firstName;
        console.log(this.nombre);
        environment.isLogged = true;
        localStorage.setItem("nombre", this.nombre);
        this.router.navigate(['']);
      }

    });
  }

}

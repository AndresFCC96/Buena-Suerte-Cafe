import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nombre: string ;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.nombre = localStorage.getItem("nombre");
  }

  cerrarSesion(){
    localStorage.clear();
    environment.isLogged = false;
    window.location.reload();
  }
}

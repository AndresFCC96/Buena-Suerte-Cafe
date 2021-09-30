import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  nombre: string ;

  constructor() { }

  ngOnInit(): void {
    this.nombre = localStorage.getItem("nombre");
  }

}

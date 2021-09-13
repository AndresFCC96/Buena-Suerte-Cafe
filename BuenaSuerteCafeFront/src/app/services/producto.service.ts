import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from 'src/app/models/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url: string = environment.apiURL

  constructor(public httpClient: HttpClient) { }

  consultarTodosLosProductos(): Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.url}producto/consultarProductos`)
  }
}

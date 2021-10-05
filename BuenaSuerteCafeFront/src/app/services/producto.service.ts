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

  consultarProductoPorId(id: number): Observable<Producto>{
    return this.httpClient.get<Producto>(`${this.url}producto/consultarProductoPorId?id=${id}`)
  }

  guardarProducto(producto:Producto): Observable<Producto>{
    return this.httpClient.post<Producto>(`${this.url}producto/crearProducto`, producto);
  }

  actualizarProducto(producto:Producto): Observable<Producto>{
    return this.httpClient.put<Producto>(`${this.url}producto/actualizarProducto`, producto);
  }

  eliminarProducto(id:number): Observable<Producto>{
    return this.httpClient.delete<Producto>(`${this.url}producto/eliminarProducto?id=${id}`);
  }
}

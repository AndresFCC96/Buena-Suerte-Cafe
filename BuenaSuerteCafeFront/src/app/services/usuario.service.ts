import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from 'src/app/models/usuario';




@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url: string = environment.apiURL
  constructor(public httpClient: HttpClient) { }

  consultarUsuarioPorEmail(email: string): Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.url}ciudad/consultarciudades`)
  }

  validateLogIn(email: String, password: String): Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.url}usuario/ValidateLogIn?email=${email}&password=${password}`)
  }

  consultarTodosLosUsuarios(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.url}usuario/consultarTodosLosUsuarios`)
  }

  consultarUsuarioPorId(id: number): Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.url}usuario/consultarUsuarioPorId?id=${id}`)
  }

}

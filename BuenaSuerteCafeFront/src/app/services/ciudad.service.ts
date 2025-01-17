import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ciudad } from 'src/app/models/ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  private url: string = environment.apiURL

  constructor(public httpClient: HttpClient) { }

  consultarTodasLasCiudades(): Observable<Ciudad[]>{
    return this.httpClient.get<Ciudad[]>(`${this.url}ciudad/consultarciudades`)
  }

  consultarTodasLasCiudadesPorDepartamento(idDep: number): Observable<Ciudad[]>{
    return this.httpClient.get<Ciudad[]>(`${this.url}ciudad/consultarciudadespordepartamento?departmentId=${idDep}`)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Departamento } from '../models/Departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  private url: string = environment.apiURL
  constructor(public httpClient: HttpClient) { }

  consultarTodosLosDepartamentos(): Observable<Departamento[]>{
    return this.httpClient.get<Departamento[]>(`${this.url}Departamento/consultarDepartamentos`)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Blogs } from '../models/Blogs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private url: string = environment.apiURL

  constructor(public httpClient: HttpClient) { }

  consultarTodosLosBlogs(): Observable<Blogs[]>{
    return this.httpClient.get<Blogs[]>(`${this.url}blog/consultarProductos`)
  }
}

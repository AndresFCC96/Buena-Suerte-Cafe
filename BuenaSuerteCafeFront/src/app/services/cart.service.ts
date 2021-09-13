import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CartItem } from '../models/ItemCart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private url: string = environment.apiURL

  constructor(private http: HttpClient) { }

  // getElementosCarrito(): Observable<CartItem[]> {
  //   return this.http.get<CartItem[]>()
  // }
}

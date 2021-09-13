import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Producto } from '../models/Producto';

@Injectable({
  providedIn: 'root'
})
export class MensajeroService {

  subject = new Subject()

  constructor() { }

  enviarMensaje(producto: any){
    this.subject.next(producto)
  }

  obtenerMensaje(){
    return this.subject.asObservable()
  }
}

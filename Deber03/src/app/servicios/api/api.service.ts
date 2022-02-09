import { Injectable } from '@angular/core';
import {ResponseInterface} from '../../modelos/response.interface';
import {HttpClient} from '@angular/common/http';
import {ListarazaInterface} from '../../modelos/listaraza.interface'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
url: string = "http://localhost:3000/api/"
  constructor(private http:HttpClient) { }

  getAllRaza():Observable<ListarazaInterface[]>{
  var direccion = this.url+"raza";
  return this.http.get<ListarazaInterface[]>(direccion);
  }

}

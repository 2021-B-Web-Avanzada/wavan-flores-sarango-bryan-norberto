import { Injectable } from '@angular/core';
import {ResponseInterface} from '../../modelos/response.interface';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {ListarazaInterface} from '../../modelos/listaraza.interface'
import { Observable } from 'rxjs';
import {razaInterface} from '../../modelos/raza.interface'

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

  getUnaRaza(id:any): Observable<razaInterface>{
  var direccion = this.url+"raza/"+id;
  return this.http.get<razaInterface>(direccion);
  }

  // putRaza(form:razaInterface):Observable<any>{
  // var direccion = this.url +"raza/"+form.id;
  // return this.http.put<any>(direccion,form);
  // }

  putRaza(form:razaInterface):Observable<ResponseInterface>{
    var direccion = this.url +"raza/"+form.id;
    return this.http.put<ResponseInterface>(direccion,form);
  }


  deleteRaza(form:razaInterface):Observable<ResponseInterface>{
    var direccion = this.url +"raza/"+form.id;
    var opciones = {
      header: new HttpHeaders({
        'Conten-type':'application/json'
      }),
      body: form
    }
    return this.http.delete<ResponseInterface>(direccion,opciones);
  }

  postRaza(form:razaInterface):Observable<ResponseInterface>{
    var direccion = this.url +"raza/";
    return this.http.post<ResponseInterface>(direccion, form);
  }
}

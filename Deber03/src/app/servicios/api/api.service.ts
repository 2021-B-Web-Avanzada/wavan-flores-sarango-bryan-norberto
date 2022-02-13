import { Injectable } from '@angular/core';
import {ResponseInterface} from '../../modelos/response.interface';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {ListarazaInterface} from '../../modelos/listaraza.interface'
import { Observable } from 'rxjs';
import {razaInterface} from '../../modelos/raza.interface'
import { ListamascotaInterface } from 'src/app/modelos/listamascota.interface';
import { MascotaInterface } from 'src/app/modelos/mascota.interface';

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

  getAllMascota():Observable<ListamascotaInterface[]>{
    var direccion = this.url+"mascota";
    return this.http.get<ListamascotaInterface[]>(direccion);
  }

  getUnaRaza(id:any): Observable<razaInterface>{
  var direccion = this.url+"raza/"+id;
  return this.http.get<razaInterface>(direccion);
  }
  getUnaMascota(idPadre:any,idChildren: any): Observable<MascotaInterface>{
    var direccion = this.url+"mascota/"+idPadre+"&"+idChildren;
    return this.http.get<MascotaInterface>(direccion);
  }

  // putRaza(form:razaInterface):Observable<any>{
  // var direccion = this.url +"raza/"+form.id;
  // return this.http.put<any>(direccion,form);
  // }

  putRaza(form:razaInterface):Observable<ResponseInterface>{
    var direccion = this.url +"raza/"+form.id;
    return this.http.put<ResponseInterface>(direccion,form);
  }
  putMascota(form:MascotaInterface):Observable<ResponseInterface>{
    var direccion = this.url +"mascota/"+form.idPadre+"&"+form.idChildren;
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

  deleteMascota(form:MascotaInterface):Observable<ResponseInterface>{
    var direccion = this.url +"mascota/"+form.idPadre+"&"+form.idChildren;
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

  postMascota(form:MascotaInterface):Observable<ResponseInterface>{
    var direccion = this.url +"mascota/"+form.idPadre;
    return this.http.post<ResponseInterface>(direccion, form);
  }
}

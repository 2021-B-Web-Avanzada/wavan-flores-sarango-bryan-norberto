import { Injectable } from '@angular/core';
import {Usuario} from "../usuario.interface";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Proyecto} from "../proyecto.interface";
import {DatosProyectos} from "../solicitudes.interface";
import {Propiedad} from "../propiedad.interface";
import {Mensaje} from "../mensajes.interface";

@Injectable({
  providedIn: 'root'
})
export class ServiciohttpService {

  constructor(private readonly httpClient: HttpClient) { }


  validarusuario(datosUsuario:object):Observable<Usuario>{

    return this.httpClient
      .post('/api/usuarios/',datosUsuario)
      .pipe(
        map(
          (resultadoendata)=> resultadoendata as Usuario
        )
      )
  }

  obtenerproyectos(datos:Object):Observable<Proyecto[]>{
    console.log(datos,"aaaaaaaaaaaaaaaa")
      return this.httpClient
        .post('/api/proyectos/',datos)
        .pipe(
          map(
            (resultadoendata)=> resultadoendata as Proyecto[]
          )
        )

    }

    obtenerpropiedades(datos:Object):Observable<Propiedad[]>{
      return this.httpClient
        .post('/api/propiedades/',datos)
        .pipe(
          map(
            (resultadoendata)=> resultadoendata as Propiedad[]
          )
        )

    }

    insertarmensajes(datos:Object):Observable<any>{
    return this.httpClient
      .post('/api/mensajes/',datos)
      .pipe(
        map(
          (resultadoendata)=> resultadoendata as string
        )
      )
    }

    obtenermensajes(idusuario:Object):Observable<Mensaje[]>{
    return this.httpClient
      .put('/api/mensajes/',idusuario)
      .pipe(
        map(
          (resultadoendata)=> resultadoendata as Mensaje[]
        )
      )
    }

  obtenerImagenes(idproyecto:Object):Observable<string[]>{
    return this.httpClient
      .post('/api/imagenes/',idproyecto)
      .pipe(
        map(
          (resultadoendata)=> resultadoendata as string[]
        )
      )
  }






}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { environment } from 'src/environments/environment';
import { UserJphInterface } from './interfaces/user-jph.interface';

@Injectable({
  providedIn: 'any'
})
export class UserJphService {

  constructor(
    private readonly httpClient: HttpClient
  ) {}

  buscarTodos(): Observable<UserJphInterface[]> {
    const url = environment.urlJPC +'/users';
      return this.httpClient.get(url)
        .pipe(
          map(
              (resultadoEnData)=>resultadoEnData as UserJphInterface[]
          )
         );
  }

  buscarUno(idUsuario:number) {
    const url = environment.urlJPC +'/users/'+idUsuario;
    return this.httpClient.get(url)
      .pipe(
        map(
        (resultadoEnData)=>resultadoEnData as UserJphInterface)
  );
  }
}




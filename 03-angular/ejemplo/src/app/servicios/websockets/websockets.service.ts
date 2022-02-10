import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class websocketsService{
  constructor(private socket: Socket) {
  }
  ejecutarEventoHola() {
    //Emitimos un evento
    const resp = this.socket
      .emit(
        'Hola', {
          nombre: 'Adrian'
        }
      );
    console.log(resp);
  }

  escucharEventoHola(){
    return this.socket
      .fromEvent('escucharEventoHola');

  }

  ejecutarEventoUniserSala(salaId:number, nombre: string) {
    //Emitimos un evento
    this.socket.emit(
      'unirseSala',{
        nombre,
        salaId
      }
    );
  }
    escucharEventoUnirseSala(){
      return this.socket.fromEvent('escucharEventoUnirseSala')
    }

  ejecutarEventoEnviarMensaje(salaId:number, nombre: string, mensaje:string) {
    //Emitimos un evento
    this.socket.emit(
      'unirseSala',{
        nombre,
        salaId,
        mensaje
      }
    );
  }
  escucharEventoEnviarMensajeSala(){
    return this.socket.fromEvent('escucharEventoEnviarMensajeSala')
  }



}

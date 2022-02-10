import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{websocketsService} from '../../servicios/websockets/websockets.service'
import {Subscription} from 'rxjs'
@Component({
  selector: 'app-ruta-sala',
  templateUrl: './ruta-sala.component.html',
  styleUrls: ['./ruta-sala.component.scss']
})
export class RutaSalaComponent implements OnInit {
nombre='';
salaId='';
arregloSubscripciones: Subscription[]=[];
mensaje='';
arregloMensajes:{
  salaId:number;
  nombre:string;
  mensaje:string;
  posicion: 'izq'|'der';
}[]=[];
  constructor(
    public readonly activatedRoute: ActivatedRoute,
    public readonly websocketService: websocketsService
  ) {
    console.log('Contructor')
  }
  enviarMensaje(){
    this.websocketService.ejecutarEventoEnviarMensaje(
      +this.salaId,this.nombre,this.mensaje
    );
    this.mensaje='';
  }

  ngOnInit(): void {
    this.activatedRoute
      .params
      .subscribe(
        {
          next:(parametrosDeRuta)=>{
            const salaId = parametrosDeRuta['saldaId'];
            const nombre = parametrosDeRuta['nombre'];
            this.nombre = nombre;
            this.salaId = salaId;
            this.logicaSalas(this.salaId, this.nombre);
          }
        }
      )

  }
  logicaSalas(salaId:string,nombre:string){
    this.desSubscribirse();
    const respEscucharEventoMensajeSala = this
      .websocketService
      .escucharEventoEnviarMensajeSala()
      .subscribe(
        {
          next:(data)=>{
            console.log('Enviaron Mensaje', data);
            this.arregloMensajes.push(
              {
                mensaje: data.mensaje,
                salaId: data.salaId,
                nombre: data.nombre,
                posicion: data.nombre === this.nombre ? 'izq' : 'der'
              }
            )
          },
          error:(error)=>{
            console.error({error});
          }
        }
      );
    const respEscucharEventoUnirseSala = this
      .websocketService
      .escucharEventoUnirseSala()
      .subscribe(
        {
          next:(data)=>{
            console.log('Alguien entró',data);
          },
          error:(error)=>{
            console.error({error})
          }
        }
      );
    this.arregloSubscripciones.push(respEscucharEventoMensajeSala);
    this.arregloSubscripciones.push(respEscucharEventoUnirseSala);
    this.websocketService.ejecutarEventoUniserSala(+this.salaId,this.nombre);
  }

  desSubscribirse(){
    this.arregloSubscripciones.forEach(
      (subscripcion)=>{
        subscripcion.unsubscribe();
      }
    );
    this.arregloSubscripciones=[];
  }

  ngOnDestroy():void{
    console.log('destroy');
  }

}

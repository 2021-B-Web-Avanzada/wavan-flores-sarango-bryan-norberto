import {Component, Input, OnInit} from '@angular/core';
import {AppComponent} from "../../app.component";
import {ServiciohttpService} from "../../servicios/serviciohttp.service";
import {formatNumber} from "@angular/common";
import {Propiedad} from "../../propiedad.interface";
import {Mensaje} from "../../mensajes.interface";

@Component({
  selector: 'app-mensaje2',
  templateUrl: './mensaje2.component.html',
  styleUrls: ['./mensaje2.component.css']
})
export class Mensaje2Component implements OnInit {
datosUsuario={
idUsuario:0
}
  constructor(
    private readonly app: AppComponent,
    private readonly httpservice: ServiciohttpService
  ) { }

  @Input()
  listamen:Mensaje[]=[
    {
      CONTENIDO_MENSAJE: "mensaje",
      ID_PROYECTO: "4",
      ID_PROPIEDAD: "6",
      NOMBRE_USUARIO: "usuario2",
      EMAIL_USUARIO: "correo",
      CELULAR_USUARIO: "3004930"
    },
    {
      CONTENIDO_MENSAJE: "mensaje1",
      ID_PROYECTO: "3",
      ID_PROPIEDAD: "7",
      NOMBRE_USUARIO: "usuario3",
      EMAIL_USUARIO: "correo",
      CELULAR_USUARIO: "3004930"
    }
  ]



  ngOnInit(): void {
  this.obtenermensajes()
  }

  obtenermensajes(){
    // @ts-ignore
    this.datosUsuario.idUsuario=this.app.usuario.ID_USUARIO
    this.httpservice
      .obtenermensajes(this.datosUsuario)
      .subscribe({
          next:(datos)=>{
            this.app.listaMensajes=datos
            console.log(this.app.listaMensajes)
            console.log(this.datosUsuario)
          },
          error:(error)=>{
            console.error({error})
          }
        }
      )}








}

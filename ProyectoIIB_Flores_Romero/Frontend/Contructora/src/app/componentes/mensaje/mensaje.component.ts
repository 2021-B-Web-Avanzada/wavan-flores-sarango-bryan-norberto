import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../../app.component";
import {ServiciohttpService} from "../../servicios/serviciohttp.service";

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {
  mensaje=""

  datosMensaje={
    mensaje:"",
    idproyecto:null,
    idpropiedad:null,
    idusuario:null
  }


  constructor(
    private readonly httpservice: ServiciohttpService,
    private readonly app: AppComponent
  ) { }

  ngOnInit(): void {
  }

  enviarMensajeProyecto(){
    this.datosMensaje.mensaje=this.mensaje
    // @ts-ignore
    this.datosMensaje.idproyecto=this.app.iDproyectocontactar
    // @ts-ignore
    this.datosMensaje.idusuario=this.app.usuario.ID_USUARIO
    if(this.app.iDpropiedadcontactar!=0){
      // @ts-ignore
      this.datosMensaje.idpropiedad=this.app.iDpropiedadcontactar
    }
  this.httpservice.insertarmensajes(this.datosMensaje)
    .subscribe({
        next:(datos)=>{
          console.log(this.datosMensaje)
          this.app.contactar=false
          alert("Mensaje enviado con exito")
        },
        error:(error)=>{
          console.error({error})
        }

      }
    )
    this.mensaje=""
  }





  cancelar(){
    this.app.contactar=false
  }

}

import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../usuario.interface";
import {ServiciohttpService} from "../../servicios/serviciohttp.service";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombreDeUsuario=""
  contrasena=""
  datosusuario={
    "usuario":"",
    "contrasena":""
  }

  constructor(
    private readonly httpservice: ServiciohttpService,
    private readonly app: AppComponent
  ) { }

  ngOnInit(): void {
  }

  validadusuario(nombreUsuario:string,contrasenaUsuario:string){
    this.datosusuario.usuario=nombreUsuario;
    this.datosusuario.contrasena=contrasenaUsuario;
    this.nombreDeUsuario=""
    this.contrasena=""
    this.httpservice
      .validarusuario(this.datosusuario)
      .subscribe({
          next:(datos)=>{
            this.app.usuario=datos
            if(datos){
              this.app.mostrarInicio=true
              this.app.mostrarLogin=false
            }
            else{
              this.nombreDeUsuario=""
              this.contrasena=""
              alert("Credenciales no validas")
            }
            console.log(this.app.usuario)
          },
          error:(error)=>{
            console.error({error})
          }

        }
      )
    this.datosusuario.usuario="";
    this.datosusuario.contrasena="";

  }


}

import { Component, OnInit } from '@angular/core';
import {ServiciohttpService} from "../../servicios/serviciohttp.service";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-filtrar',
  templateUrl: './filtrar.component.html',
  styleUrls: ['./filtrar.component.css']
})
export class FiltrarComponent implements OnInit {
  ciudad=""
  habMenor=""
  habMayor=""
  precioMenor=""
  precioMayor=""

  datosProductos={
    ciudad:"",
    habmenor:-1,
    habmayor:100,
    preciomenor:-1,
    preciomayor:1000000
  }

  constructor(
    private readonly httpservice: ServiciohttpService,
    private readonly app: AppComponent
  ) { }

  ngOnInit(): void {
    this.buscarPropiedades()
  }

  buscarPropiedades(){
    this.datosProductos.ciudad=this.ciudad

    if(this.habMayor!=null && this.habMayor!=undefined && this.habMayor!=""){
      this.datosProductos.habmayor=+this.habMayor
    }
    if(this.habMenor!=null && this.habMenor!=undefined && this.habMenor!=""){
      this.datosProductos.habmenor=+this.habMenor
    }
    if(this.precioMayor!=null && this.precioMayor!=undefined && this.precioMayor!=""){
      this.datosProductos.preciomayor=+this.precioMayor
    }
    if(this.precioMenor!=null && this.precioMenor!=undefined && this.precioMenor!=""){
      this.datosProductos.preciomenor=+this.precioMenor
    }

    this.httpservice
      .obtenerpropiedades(this.datosProductos)
      .subscribe({
          next:(datos)=>{
            this.app.listaPropiedades=datos
            console.log(this.datosProductos)
            console.log(this.app.listaPropiedades)
          },
          error:(error)=>{
            console.error({error})
          }

        }
      )
    this.datosProductos.habmenor=-1
    this.datosProductos.habmayor=100
    this.datosProductos.preciomayor=1000000
    this.datosProductos.preciomenor=-1
    this.ciudad=""
    this.habMenor=""
    this.habMayor=""
    this.precioMenor=""
    this.precioMayor=""

  }




}

import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../../app.component";
import {Proyecto} from "../../proyecto.interface";
import {ServiciohttpService} from "../../servicios/serviciohttp.service";
import {DatosProyectos} from "../../solicitudes.interface";

@Component({
  selector: 'app-filtrar-proyectos',
  templateUrl: './filtrar-proyectos.component.html',
  styleUrls: ['./filtrar-proyectos.component.css']
})
export class FiltrarProyectosComponent implements OnInit {
  //listaProyectos:Proyecto[]=[];
  ciudad=""
  dimensionMenor=""
  dimensionMayor=""
  datosProyecto={
    ciudad:"",
    dimensionmenor:0,
    dimensionmayor:1000000,
  }

  constructor(
  private readonly httpservice: ServiciohttpService,
  private readonly app: AppComponent
  ) { }

  ngOnInit(): void {
    this.buscarProyectos()
  }


  buscarProyectos(){

    this.datosProyecto.ciudad=this.ciudad

    if(this.dimensionMayor!=null && this.dimensionMayor!=undefined && this.dimensionMayor!=""){
      console.log(this.dimensionMayor)
      console.log("hola")
      this.datosProyecto.dimensionmayor=+this.dimensionMayor
    }

    if(this.dimensionMenor!=null && this.dimensionMenor!=undefined && this.dimensionMenor!=""){
      console.log(this.dimensionMenor)
      this.datosProyecto.dimensionmenor=+this.dimensionMenor
    }



    console.log(this.datosProyecto)
    this.httpservice

      .obtenerproyectos(this.datosProyecto)
      .subscribe({
          next:(datos)=>{
            this.app.listaProyectos=datos
            console.log(this.app.listaProyectos)
          },
          error:(error)=>{
            console.error({error})
          }

        }
      )

    this.ciudad=""
    this.dimensionMenor=""
    this.dimensionMayor=""
    this.datosProyecto.dimensionmayor=1000000
    this.datosProyecto.dimensionmenor=0
  }

}

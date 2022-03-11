import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../../app.component";
import {Mensaje2Component} from "../mensaje2/mensaje2.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private readonly app: AppComponent
  ) { }
  esempleado=false
  ngOnInit(): void {
    this.esEmpleado()
  }


  mostrarinicio(){
    this.app.mostrarInicio=true
    this.app.mostrarLogin=false
    this.app.mostrarMensajes=false
    this.app.mostrarPropiedades=false
    this.app.mostrarProyectos=false
    this.app.mostrarNosotros=false
    this.app.mostrarPropiedadIndividual=false
  }



  mostrarmensajes(){
    this.app.mostrarInicio=false
    this.app.mostrarLogin=false
    this.app.mostrarMensajes=true
    this.app.mostrarPropiedades=false
    this.app.mostrarProyectos=false
    this.app.mostrarNosotros=false
    this.app.mostrarPropiedadIndividual=false
  }

  mostrarpropiedades(){
    this.app.mostrarInicio=false
    this.app.mostrarLogin=false
    this.app.mostrarMensajes=false
    this.app.mostrarPropiedades=true
    this.app.mostrarProyectos=false
    this.app.mostrarNosotros=false
    this.app.mostrarPropiedadIndividual=false
  }

  mostrarproyectos(){
    this.app.mostrarInicio=false
    this.app.mostrarLogin=false
    this.app.mostrarMensajes=false
    this.app.mostrarPropiedades=false
    this.app.mostrarProyectos=true
    this.app.mostrarNosotros=false
    this.app.mostrarPropiedadIndividual=false
  }

  mostrarnosotros(){
    this.app.mostrarInicio=false
    this.app.mostrarLogin=false
    this.app.mostrarMensajes=false
    this.app.mostrarPropiedades=false
    this.app.mostrarProyectos=false
    this.app.mostrarNosotros=true
    this.app.mostrarPropiedadIndividual=false
  }

  esEmpleado(){
    // @ts-ignore
    if(this.app.usuario.TIPO_USUARIO=="empleado"){
     this.esempleado=true
    }
  }


  salir(){
      this.app.usuario=undefined
      this.app.mostrarInicio=false
      this.app.mostrarLogin=true
      this.app.mostrarMensajes=false
      this.app.mostrarPropiedades=false
      this.app.mostrarProyectos=false
      this.app.mostrarNosotros=false
      this.app.mostrarPropiedadIndividual=false

  }


}

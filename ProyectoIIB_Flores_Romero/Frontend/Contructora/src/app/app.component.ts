import { Component } from '@angular/core';
import {Proyecto} from "./proyecto.interface";
import {Propiedad} from "./propiedad.interface";
import {Usuario} from "./usuario.interface";
import {Mensaje} from "./mensajes.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrarInicio=false
  mostrarLogin=true
  mostrarProyectos=false
  mostrarPropiedades=false
  mostrarMensajes=false
  mostrarNosotros=false
  mostrarPropiedadIndividual=false

  contactar=false
  iDproyectocontactar=0
  iDpropiedadcontactar=0

  listaMensajes: Mensaje[]=[]
  listaProyectos:Proyecto[]=[];
  listaPropiedades:Propiedad[]=[];
  propiedad: Propiedad={}
  usuario: Usuario | undefined={};
  listaimagenesPropiedad:string[]=[]
  urlImagenNostros="https://www.eude.es/wp-content/uploads/2018/05/Dise%C3%B1o-sin-t%C3%ADtulo-2021-05-11T165120.480.png"
  urlIngeniero="https://image.shutterstock.com/image-photo/young-architect-man-wearing-builder-260nw-1774438643.jpg"


  title = 'Contructora';
}


import {Component, Input, OnInit} from '@angular/core';
import {Proyecto} from "../../proyecto.interface";
import {Propiedad} from "../../propiedad.interface";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-propiedad',
  templateUrl: './propiedad.component.html',
  styleUrls: ['./propiedad.component.css']
})
export class PropiedadComponent implements OnInit {
  @Input()
  listaPropiedades:Propiedad[]=[
    {
      ID_PROPIEDAD: 1,
      NOMBRE_PROP: "uyrgfdr",
      DIMENSION_TOTAL_PRO: "765",
      ID_PROYECTO: 5,
      PLANO_PROP: "https://cloudfront-us-east-1.images.arcpublishing.com/semana/VJKA7GGFLVC2DMUKB5ZOHJ3OI4.jpg",
      PRECIO_PROP: 765,
      NUMERO_HABITACIONES_PROP: 6,
      NUMERO_BANOS_PROP: 4,
      NUMERO_ESTACIONAMIENTOS_PROP: 65,
      TIPO_PROP: "jhghjk",
      UBICACION_PROY:"KGVNHVJGMBKJ"

    },
    {
      ID_PROPIEDAD: 7,
      NOMBRE_PROP: "uythjkjhgchg",
      DIMENSION_TOTAL_PRO: "7",
      ID_PROYECTO: 9,
      PLANO_PROP: "https://cloudfront-us-east-1.images.arcpublishing.com/semana/VJKA7GGFLVC2DMUKB5ZOHJ3OI4.jpg",
      PRECIO_PROP: 76,
      NUMERO_HABITACIONES_PROP: 18,
      NUMERO_BANOS_PROP: 4,
      NUMERO_ESTACIONAMIENTOS_PROP: 65,
      TIPO_PROP: "jhghjk",
      UBICACION_PROY:"KGVNHVJGMBKJ"
    }
  ]

  constructor(
    private readonly app: AppComponent
  ) { }

  ngOnInit(): void {
  }

  contactar(idproyecto:any, idpropiedad: any){
    this.app.contactar=true
    this.app.iDproyectocontactar = idproyecto
    this.app.iDpropiedadcontactar = idpropiedad
  }
  mostrarPropiedadIndividual(idproyecto:any, idpropiedad: any){
    this.app.iDproyectocontactar = idproyecto
    this.app.iDpropiedadcontactar = idpropiedad
    this.app.mostrarPropiedadIndividual = true
    this.app.mostrarInicio=false
    this.app.mostrarLogin=false
    this.app.mostrarMensajes=false
    this.app.mostrarPropiedades=false
    this.app.mostrarProyectos=false
    this.app.mostrarNosotros=false
  }

}

import {Component, Input, OnInit} from '@angular/core';
import{Proyecto} from "../../proyecto.interface";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {


  @Input()
  listaProyectos:Proyecto[]=[
    {
      ID_PROYECTO: "76",
      ID_USUARIO: "32",
      NOMBRE_PROY: "Proyec",
      PLANO_PROY:"https://cloudfront-us-east-1.images.arcpublishing.com/semana/VJKA7GGFLVC2DMUKB5ZOHJ3OI4.jpg",
      UBICACION_PROY: "quito",
      NUMERO_PROP_PROY: "eld",
      DIMENSION_PROY: "dkdkdf",
      NUMERO_PROP_DISPONIBLE_PRO:"ddkd",
      SERVICIOS_PROY:"kfkfk"

    },
    {
      ID_PROYECTO: "80",
      ID_USUARIO: "3",
      NOMBRE_PROY: "PROYECTO",
      PLANO_PROY:"http://pivot.com.mx/wp-content/uploads/2017/10/%C2%BFComo-hacer-la-diferencia-en-Proyectos-Inmobiliarios.png",
      UBICACION_PROY: "quito",
      NUMERO_PROP_PROY: "eld",
      DIMENSION_PROY: "dkdkdf",
      NUMERO_PROP_DISPONIBLE_PRO:"ddkd",
      SERVICIOS_PROY:"kfkfk"

    }
  ]

  // nombreProyecto="Proyecto"
  // ubicacion="Ciudad"
  // servicios="servicios"
  // imagen="https://cloudfront-us-east-1.images.arcpublishing.com/semana/VJKA7GGFLVC2DMUKB5ZOHJ3OI4.jpg"

  constructor(
    private readonly app:AppComponent
  ) { }

  ngOnInit(): void {
  }
  contactar(idproyecto:any){
    this.app.contactar=true

    this.app.iDproyectocontactar = idproyecto
  }

}

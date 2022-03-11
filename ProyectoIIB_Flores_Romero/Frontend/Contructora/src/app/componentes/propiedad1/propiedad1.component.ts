import {Component, Input, OnInit} from '@angular/core';
import {Propiedad} from "../../propiedad.interface";
import {ServiciohttpService} from "../../servicios/serviciohttp.service";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-propiedad1',
  templateUrl: './propiedad1.component.html',
  styleUrls: ['./propiedad1.component.css']
})
export class Propiedad1Component implements OnInit {
  @Input()
  propiedad:Propiedad={
    DIMENSION_TOTAL_PRO:"120",
    NOMBRE_PROP:"nombre",
    PRECIO_PROP:120,
    PLANO_PROP: "https://img10.naventcdn.com/avisos/resize/9/00/62/94/76/26/1200x1200/294247059.jpg",
    NUMERO_BANOS_PROP:3,
    NUMERO_ESTACIONAMIENTOS_PROP:3,
    NUMERO_HABITACIONES_PROP:4,
    UBICACION_PROY:"dfvsdfvdf"

  }
  datosProyecto={
    idproyecto:0
  }
  @Input()
  listaImagenes=[
    "https://img10.naventcdn.com/avisos/resize/9/00/62/94/76/26/1200x1200/294247059.jpg",
      "https://img10.naventcdn.com/avisos/resize/9/00/62/94/76/26/1200x1200/292182855.jpg",
      "https://img10.naventcdn.com/avisos/resize/9/00/62/94/76/26/1200x1200/292182852.jpg",
    "https://img10.naventcdn.com/avisos/resize/9/00/62/94/76/26/1200x1200/292182855.jpg"
  ]

  constructor(
    private readonly httpservice: ServiciohttpService,
    private readonly app: AppComponent
  ) { }

  ngOnInit(): void {
    this.obtenerImagenes()
    this.obtenerPropiedad()
  }

  obtenerImagenes(){
    this.datosProyecto.idproyecto=this.app.iDpropiedadcontactar
    this.httpservice
      .obtenerImagenes(this.datosProyecto)
      .subscribe({
          next:(datos)=>{
            this.app.listaimagenesPropiedad=datos
            console.log(this.app.listaimagenesPropiedad)
          },
          error:(error)=>{
            console.error({error})
          }

        }
      )
  }
  obtenerPropiedad(){
    const idpro=this.app.iDpropiedadcontactar
    // @ts-ignore
    this.app.propiedad= this.app.listaPropiedades
      .find(
        function (valorActual, indiceActual, arregloCompleto){
          // @ts-ignore
          return valorActual.ID_PROPIEDAD ===idpro ;

        }
      );
    console.log(this.app.propiedad)
  }








}

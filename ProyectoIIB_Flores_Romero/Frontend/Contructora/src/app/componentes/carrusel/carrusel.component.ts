import { Component, OnInit } from '@angular/core';
import {NgbCarousel, NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  imagenes = [
    {
      nombre:"imagen1",
      descripcion:"descripcion, ",
      linkimagen: "https://la.network/wp-content/uploads/2020/01/EDIFICIOS-2.jpg"
    },
    {
      nombre:"imagen1",
      descripcion:"descripcion, ",
      linkimagen: "https://enkontrol.com/wp-content/uploads/2020/02/ENK-Enero-2020-Fibras-Inmobiliarias-Opc1.jpg"
    },
    {
      nombre:"imagen1",
      descripcion:"descripcion, ",
      linkimagen: "https://www.activa.cl/wp-content/uploads/2021/01/proyectos-inmobiliarios.jpg"
    }]
  constructor(private _config:NgbCarouselConfig) { }

  ngOnInit(): void {
  }

}

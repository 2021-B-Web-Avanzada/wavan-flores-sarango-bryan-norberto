import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-juego',
  templateUrl: './nuevo-juego.component.html',
  styleUrls: ['./nuevo-juego.component.css']
})
export class NuevoJuegoComponent implements OnInit {


  nuevo:string = "Aquí aparecerá tu sala"
  constructor() { }


  ngOnInit(): void {
  }

  getRandom() {
    var direccion = "http://localhost:4200/"+Math.random()
    this.nuevo = direccion;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.scss']
})
export class RutaLoginComponent implements OnInit {
  mostrarSegundoBanner=true;

  arregloUsuarios =[
    {
      id:1,
      nombre: 'Adrian',
      color: '#00BCFF',
      link:'https://as01.epimg.net/meristation/imagenes/2021/09/23/noticias/1632428523_284348_1632437337_noticia_normal.jpg',
      linkImagen:'https://mario.nintendo.com/static/908b49b78a35561f154527804283c517/slide-mpss-0.png'
    },
    {
      id:2,
      nombre: 'Adrian',
      color:'#0074FF',
      link:'https://as01.epimg.net/meristation/imagenes/2021/09/23/noticias/1632428523_284348_1632437337_noticia_normal.jpg',
      linkImagen:'https://mario.nintendo.com/static/908b49b78a35561f154527804283c517/slide-mpss-0.png'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  cambiarOcultarBanner(){
    this.mostrarSegundoBanner = !this.mostrarSegundoBanner;
  }

}

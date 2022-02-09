import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../servicios/api/api.service';
import {Router} from '@angular/router';
import {ListarazaInterface} from '../../modelos/listaraza.interface'
@Component({
  selector: 'app-leer',
  templateUrl: './leer.component.html',
  styleUrls: ['./leer.component.css']
})
export class LeerComponent implements OnInit {

  razas: ListarazaInterface[] = [];

  constructor(
    private api:ApiService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.api.getAllRaza().subscribe(data=>{
      this.razas=data;
    })
  }
  editarRaza(id:number){
    this.router.navigate(["editar",id]);
  }

  nuevaRaza(){
    this.router.navigate(["crear"]);
  }

}

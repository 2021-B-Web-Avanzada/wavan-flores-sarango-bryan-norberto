import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../servicios/api/api.service';
import {Router} from '@angular/router';
import {ListarazaInterface} from '../../modelos/listaraza.interface'
import {ListamascotaInterface} from '../../modelos/listamascota.interface'
import {MascotaInterface} from '../../modelos/mascota.interface'
@Component({
  selector: 'app-leer',
  templateUrl: './leer.component.html',
  styleUrls: ['./leer.component.css']
})
export class LeerComponent implements OnInit {

  razas: ListarazaInterface[] = [];
  mascotas: ListamascotaInterface[] = [];

  constructor(
    private api:ApiService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.api.getAllRaza()
      .subscribe(data=>{
      this.razas=data;
    })
    this.api.getAllMascota()
      .subscribe(data=>{
        this.mascotas = data;
      })
  }
  editarRaza(id:number){
    this.router.navigate(["editar",id]);
  }
  editarMascota(idChildren:any,idParent:any){
    console.log("Desde leer ",idChildren,idParent)
    this.router.navigate(["editarMascota",idParent,idChildren]);
  }

  nuevaRaza(){
    this.router.navigate(["crear"]);
  }
  nuevaMascota(){
    this.router.navigate(["crearMascota"]);
  }

}

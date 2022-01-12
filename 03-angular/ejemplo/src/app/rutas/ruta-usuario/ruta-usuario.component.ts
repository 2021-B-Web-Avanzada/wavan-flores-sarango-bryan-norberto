import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { UserJphInterface } from 'src/app/servicios/html/interfaces/user-jph.interface';
import { UserJphService } from 'src/app/servicios/html/user-jph.service';

@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.scss']
})
export class RutaUsuarioComponent implements OnInit {
arreglo: UserJphInterface[] = [];
  buscarUsuario= '';
  constructor(
    private readonly userJphService: UserJphService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {

    this.activatedRoute.queryParams
      .subscribe(
        (queryParams)=>{
        this.buscarUsuario =queryParams['name']
          this.buscarUsuarios();
        })
  }


  //   this.router.navigate(['/app','usuario'],{queryParams:{
  //     name:'asdasd'
  //     }})
  //   this.buscarUsuarios()
  // }

  buscarUsuarios(){
    this.userJphService
      .buscarTodos({
        name:this.buscarUsuario
      })
      .subscribe(
        {
          next:(datos)=>{
            this.arreglo = datos;
            this.buscarUsuario = '';
          },
          error: (error)=>{
            console.error({error})
          },
        }
      )
  }
  gestionarUsuario(idUsuario:number){}

}

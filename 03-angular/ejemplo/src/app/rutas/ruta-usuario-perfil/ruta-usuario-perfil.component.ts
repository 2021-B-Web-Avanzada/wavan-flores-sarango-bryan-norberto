import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserJphInterface } from 'src/app/servicios/html/interfaces/user-jph.interface';
import { UserJphService } from 'src/app/servicios/html/user-jph.service';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/Forms';
@Component({
  selector: 'app-ruta-usuario-perfil',
  templateUrl: './ruta-usuario-perfil.component.html',
  styleUrls: ['./ruta-usuario-perfil.component.scss']
})
export class RutaUsuarioPerfilComponent implements OnInit {

  idUsuario=0;
  usuarioActual?: UserJphInterface;
  formGroup?: FormGroup;
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly userJPHService:UserJphService,
    private readonly formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder
      .group(
        {
          email: new FormControl(
            {
              value: 'ejemplo@ejemplo.com',
              disabled: false
            },
            [
              Validators.required, //min,max,minLength, maLenght
              Validators.minLength(3),
            ])
        }
      );


    const cambio$ = this.formGroup.valueChanges;
    cambio$.subscribe({
      next:(valor)=>{
        if(this.formGroup){
          console.log(valor, this.formGroup);
          if(this.formGroup?.valid) {
            console.log('YUPI')
          }else{
            console.log(':(')
          }
        }
      }
    })
    const parametroRuta$ = this.activatedRoute.params
    parametroRuta$
      .subscribe(
        {
          next:(parametroRuta)=>{
            console.log(parametroRuta);
            this.idUsuario=+parametroRuta['idUsuario']
            this.buscarUsuario(this.idUsuario);
          }
        }
      )


  }

  buscarUsuario(id:number){
    const buscarUsuarioPorId$ = this.userJPHService.buscarUno(id);
    buscarUsuarioPorId$
      .subscribe(
        {
          next:(data) => {
            this.usuarioActual = data;
          },
          error: (error) => {
            console.error(error)
          }
        }
      )
  }
}

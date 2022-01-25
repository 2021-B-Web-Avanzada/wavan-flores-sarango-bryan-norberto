import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private readonly router : Router
  ) { }

  ngOnInit(): void {
    const parametrosRuta$ = this.activatedRoute.params;
    parametrosRuta$.subscribe(
      (parametrosRuta) => {
        console.log(parametrosRuta);
        this.idUsuario = +parametrosRuta['idUsuario'];
        this.buscarUsuario(this.idUsuario);
      },
      () => {
      },
      () => {
      }
    );
  }


  buscarUsuario(id:number){
    const buscarUsuarioPorId$ = this.userJPHService.buscarUno(id);
    buscarUsuarioPorId$
      .subscribe(
        {
          next:(data) => {
            this.usuarioActual = data;
            this.prepararFormulario();
          },
          error: (error) => {
            console.error(error)
          }
        }
      )
  }
  prepararFormulario() {
    this.formGroup = this.formBuilder
      .group({
        email: new FormControl(
          {
            value: this.usuarioActual ? this.usuarioActual.email : '',
            disabled: false
          },
          [
            Validators.required, //min, max, minLength, email, pattern
            Validators.minLength(3),
          ])
      });

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



  }

  prepararObjeto(){
    if(this.formGroup){
     const email = this.formGroup.get('email')
     if(email){
       return{
         email: email.value
       }
     }
    }
    return{
    email: ''
    }
    }
    actualizarUsuario(){
      if (this.usuarioActual) {
        const valoresAActualizar = this.prepararObjeto();
        const actualizar$ = this.userJPHService
          .actualizarPorId(
            this.usuarioActual.id,
            valoresAActualizar
          );
        actualizar$
          .subscribe({
            next: (datos) => {
              console.log({ datos });
              const url = ['/app','usuario'];
              this.router.navigate(url);
            },
            error: (error) => {
              console.log({ error })
            }
          });
      }
    }

}

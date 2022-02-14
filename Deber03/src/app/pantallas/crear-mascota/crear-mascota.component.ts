import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MascotaInterface } from 'src/app/modelos/mascota.interface';
import { razaInterface } from 'src/app/modelos/raza.interface';
import { AlertasService } from 'src/app/servicios/alertas/alertas.service';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})
export class CrearMascotaComponent implements OnInit {

  constructor(private api: ApiService, private router:Router, private alerta:AlertasService ) { }

  nuevoFormMascota = new FormGroup({
    idChildren: new FormControl(''),
    idPadre: new FormControl(''),
    nombreChildren: new FormControl(''),
    edad: new FormControl(''),
    numeroVacunas: new FormControl(''),
    dueno:new FormControl(''),
    residenciaDueno: new FormControl('')
  });

  ngOnInit(): void {
  }

  postForm(form:MascotaInterface){
    this.api.postMascota(form)
      .subscribe({
          next: (data) => {
            console.log("holaaaa")
          },
          error:(error)=>{
            var respuesta=error;
            console.log(respuesta.status);
            if(respuesta.status==200){
              this.alerta.mostrarSuccess("Mascota creada", "Realizado");
              this.router.navigate(['leer']);
            }
            else{
              this.alerta.mostrarError("Error ","Algo ha salido mal")
            }
          }
        }
      );
  }

}

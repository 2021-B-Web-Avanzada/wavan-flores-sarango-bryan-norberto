import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaInterface } from 'src/app/modelos/mascota.interface';
import { AlertasService } from 'src/app/servicios/alertas/alertas.service';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.component.html',
  styleUrls: ['./editar-mascota.component.css']
})
export class EditarMascotaComponent implements OnInit {

  constructor(private activerouter: ActivatedRoute, private router:Router, public api:ApiService, private alerta:AlertasService) { }

  datosMascota: MascotaInterface | undefined;
  editarFormMascota= new FormGroup({
    idChildren: new FormControl(''),
    idPadre: new FormControl(''),
    nombreChildren: new FormControl(''),
    edad: new FormControl(''),
    numeroVacunas: new FormControl(''),
    dueno:new FormControl(''),
    residenciaDueno: new FormControl('')
  });
  ngOnInit(): void {
     var mascotaid = this.activerouter.snapshot.paramMap.get('idChildren');
     var razaid = this.activerouter.snapshot.paramMap.get('idParent');
    this.api.getUnaMascota(razaid,mascotaid)
      .subscribe(data=>{
        this.datosMascota = data;
        this.editarFormMascota.setValue({
          'idChildren':this.datosMascota.idChildren,
          'idPadre':this.datosMascota.idPadre,
          'nombreChildren' : this.datosMascota.nombreChildren,
          "edad": this.datosMascota.edad,
          "numeroVacunas": this.datosMascota.numeroVacunas,
          "dueno": this.datosMascota.dueno,
          "residenciaDueno": this.datosMascota.residenciaDueno
        });
      });
  }

  putForm(form:MascotaInterface){
    this.api.putMascota(form)
      .subscribe({
          next: (data) => {
            console.log("holaaaa desde mascota")
          },
          error:(error)=>{
            var respuesta=error;
            console.log(respuesta.status);
            if(respuesta.status==200){
              this.alerta.mostrarSuccess("Datos modificados", "Realizado");
              this.router.navigate(['leer']);
            }
            else{
              this.alerta.mostrarError("Error ","Algo ha salido mal")
            }
          }
        }
      );
  }

  eliminarMascota(){
    var datos:MascotaInterface = this.editarFormMascota.value
    this.api.deleteMascota(datos)
      .subscribe({
          next: (data) => {

            console.log("holaaaa")
          },
          error:(error)=>{
            var respuesta=error;
            console.log(respuesta.status);
            if(respuesta.status==200){
              this.alerta.mostrarSuccess("Mascota Eliminada", "Realizado");
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

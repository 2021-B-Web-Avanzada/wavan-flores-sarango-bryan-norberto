import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {ListarazaInterface} from '../../modelos/listaraza.interface'
import {razaInterface} from '../../modelos/raza.interface'
import {ApiService} from  '../../servicios/api/api.service'
import {FormGroup,FormControl,Validators,ReactiveFormsModule} from '@angular/forms'
import {ResponseInterface} from '../../modelos/response.interface'
import { AlertasService} from '../../servicios/alertas/alertas.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private activerouter: ActivatedRoute, private router:Router, public api:ApiService, private alerta:AlertasService) { }

  datosRaza: razaInterface | undefined;
  editarFormRaza= new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    origen: new FormControl(''),
    existencia: new FormControl(''),
    tamano:new FormControl(''),
    peso: new FormControl('')
  });
  ngOnInit(): void {
    var razaid = this.activerouter.snapshot.paramMap.get('id');

    this.api.getUnaRaza(razaid)
      .subscribe(data=>{
        this.datosRaza = data;
        this.editarFormRaza.setValue({
          'id':this.datosRaza.id,
          'nombre' : this.datosRaza.nombre,
          "origen": this.datosRaza.origen,
          "existencia": this.datosRaza.existencia,
          "tamano": this.datosRaza.tamano,
          "peso": this.datosRaza.peso
        });
      });
  }
  putForm(form:razaInterface){

    this.api.putRaza(form)
      .subscribe({
        next: (data) => {
            console.log("holaaaa")
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

  eliminarRaza(){
    var datos:razaInterface = this.editarFormRaza.value
    this.api.deleteRaza(datos)
      .subscribe({
          next: (data) => {

            console.log("holaaaa")
          },
          error:(error)=>{
            var respuesta=error;
            console.log(respuesta.status);
            if(respuesta.status==200){
              this.alerta.mostrarSuccess("Raza Eliminada", "Realizado");
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

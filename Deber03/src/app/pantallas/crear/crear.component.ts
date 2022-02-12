import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,ReactiveFormsModule} from '@angular/forms'
import {razaInterface} from '../../modelos/raza.interface'
import {ResponseInterface} from '../../modelos/response.interface'
import { AlertasService} from '../../servicios/alertas/alertas.service'
import {ApiService} from  '../../servicios/api/api.service'
import {Router, ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  constructor(private api: ApiService, private router:Router, private alerta:AlertasService ) { }

  nuevoFormRaza= new FormGroup({
    nombre: new FormControl(''),
    origen: new FormControl(''),
    existencia: new FormControl(''),
    tamano:new FormControl(''),
    peso: new FormControl('')
  });
  ngOnInit(): void {
  }

  postForm(form:razaInterface){
  this.api.postRaza(form)
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


}

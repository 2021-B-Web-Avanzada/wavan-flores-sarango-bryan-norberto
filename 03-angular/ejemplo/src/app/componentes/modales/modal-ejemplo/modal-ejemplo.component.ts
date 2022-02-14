import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RutaUsuarioPerfilComponent } from 'src/app/rutas/ruta-usuario-perfil/ruta-usuario-perfil.component';

@Component({
  selector: 'app-modal-ejemplo',
  templateUrl: './modal-ejemplo.component.html',
  styleUrls: ['./modal-ejemplo.component.scss']
})
export class ModalEjemploComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public dialogRef: MatDialogRef<RutaUsuarioPerfilComponent>,
  ) { }

  cerrarDialogo(){
    this.dialogRef.close({nombre:'Bryan'});
  }

  ngOnInit(): void {
    console.log(this.data);
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AplicacionesComponent } from './aplicaciones/aplicaciones.component';



@NgModule({
  declarations: [
    AplicacionesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AplicacionesComponent
  ]
})
export class AplicacionesModule { }

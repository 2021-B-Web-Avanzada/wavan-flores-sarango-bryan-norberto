import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AplicacionesPremiumComponent } from './aplicaciones-premium/aplicaciones-premium.component';



@NgModule({
  declarations: [
    AplicacionesPremiumComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AplicacionesPremiumComponent
  ]
})
export class AplicacionesPremiumModule { }

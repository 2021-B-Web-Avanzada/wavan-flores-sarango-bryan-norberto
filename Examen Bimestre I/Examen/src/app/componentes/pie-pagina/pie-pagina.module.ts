import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';



@NgModule({
  declarations: [
    PiePaginaComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    PiePaginaComponent
  ]
})
export class PiePaginaModule { }

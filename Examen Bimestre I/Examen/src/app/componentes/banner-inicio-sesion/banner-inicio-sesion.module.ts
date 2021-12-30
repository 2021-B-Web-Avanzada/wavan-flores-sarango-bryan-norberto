import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerInicioSesionComponent } from './banner-inicio-sesion/banner-inicio-sesion.component';



@NgModule({
  declarations: [
    BannerInicioSesionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BannerInicioSesionComponent
  ]
})
export class BannerInicioSesionModule { }

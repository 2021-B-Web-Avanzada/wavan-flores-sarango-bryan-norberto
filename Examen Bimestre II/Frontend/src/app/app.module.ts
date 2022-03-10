import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './rutas/home/home.component';
import { SalaComponent } from './rutas/sala/sala.component';
import { NotFoundComponent } from './rutas/not-found/not-found.component';
import { CookieService } from 'ngx-cookie-service';
import { DrawComponent } from './rutas/draw/draw.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { NuevoJuegoComponent } from './componentes/nuevo-juego/nuevo-juego.component';
import { InstruccionesComponent } from './rutas/instrucciones/instrucciones.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SalaComponent,
    NotFoundComponent,
    DrawComponent,
    CabeceraComponent,
    PiePaginaComponent,
    NuevoJuegoComponent,
    InstruccionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

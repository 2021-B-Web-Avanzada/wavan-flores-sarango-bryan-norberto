import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { EditarComponent } from './pantallas/editar/editar.component';
import { CrearComponent } from './pantallas/crear/crear.component';
import { LeerComponent } from './pantallas/leer/leer.component';
import { DashboardComponent } from './pantallas/dashboard/dashboard.component';
import { NoEncontradaComponent } from './pantallas/no-encontrada/no-encontrada.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PiePaginaComponent,
    EditarComponent,
    CrearComponent,
    LeerComponent,
    DashboardComponent,
    NoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AplicacionesPremiumModule } from './componentes/aplicaciones-premium/aplicaciones-premium.module';
import { AplicacionesModule } from './componentes/aplicaciones/aplicaciones.module';
import { BannerInicioSesionModule } from './componentes/banner-inicio-sesion/banner-inicio-sesion.module';
import { MenuModule } from './componentes/menu/menu.module';
import { MenuComponent } from './componentes/menu/menu/menu.component';
import { PiePaginaModule } from './componentes/pie-pagina/pie-pagina.module';
import { RutaOfficeComponent } from './rutas/ruta-office/ruta-office.component';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';
import { RutaProductosComponent } from './rutas/ruta-productos/ruta-productos.component';
import { RutaPlantillasComponent } from './rutas/ruta-plantillas/ruta-plantillas.component';
import { RutaSoporteTecnicoComponent } from './rutas/ruta-soporte-tecnico/ruta-soporte-tecnico.component';
import { RutaMiCuentaComponent } from './rutas/ruta-mi-cuenta/ruta-mi-cuenta.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    RutaOfficeComponent,
    RutaNotFoundComponent,
    RutaProductosComponent,
    RutaPlantillasComponent,
    RutaSoporteTecnicoComponent,
    RutaMiCuentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    AplicacionesModule,
    AplicacionesPremiumModule,
    BannerInicioSesionModule,
    PiePaginaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

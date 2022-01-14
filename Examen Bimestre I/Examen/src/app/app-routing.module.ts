import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaMiCuentaComponent } from './rutas/ruta-mi-cuenta/ruta-mi-cuenta.component';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';
import { RutaOfficeComponent } from './rutas/ruta-office/ruta-office.component';
import { RutaPlantillasComponent } from './rutas/ruta-plantillas/ruta-plantillas.component';
import { RutaProductosComponent } from './rutas/ruta-productos/ruta-productos.component';
import { RutaSoporteTecnicoComponent } from './rutas/ruta-soporte-tecnico/ruta-soporte-tecnico.component';

const routes: Routes = [
  {
    path: 'office',
    component: RutaOfficeComponent,
  },
   {
     path:'productos',
     component: RutaProductosComponent,
   } ,
   {
     path:'plantillas',
     component: RutaPlantillasComponent,
   },
   {
     path:'soporte-tecnico',
     component: RutaSoporteTecnicoComponent,
   },
   {
     path:'mi-cuenta',
     component: RutaMiCuentaComponent,
   },
  {
    path: '',
    redirectTo:'/office',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: RutaNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash :true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

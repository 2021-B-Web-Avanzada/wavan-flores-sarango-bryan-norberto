import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';
import { RutaOfficeComponent } from './rutas/ruta-office/ruta-office.component';

const routes: Routes = [
   {
    path: 'office',
    component: RutaOfficeComponent,
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './rutas/home/home.component';
import { InstruccionesComponent } from './rutas/instrucciones/instrucciones.component';
import { NotFoundComponent } from './rutas/not-found/not-found.component';
import { SalaComponent } from './rutas/sala/sala.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'instrucciones', component: InstruccionesComponent},
  {path:':room', component: SalaComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

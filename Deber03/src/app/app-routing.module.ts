import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './pantallas/crear/crear.component';
import { EditarComponent } from './pantallas/editar/editar.component';
import { LeerComponent } from './pantallas/leer/leer.component';
import { NoEncontradaComponent } from './pantallas/no-encontrada/no-encontrada.component';

const routes: Routes = [
  {path:'', redirectTo:'leer', pathMatch:'full'},
  {path:'leer', component: LeerComponent},
  {path:'crear', component: CrearComponent},
  {path:'editar/:id', component: EditarComponent},
  {path: '**', component: NoEncontradaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

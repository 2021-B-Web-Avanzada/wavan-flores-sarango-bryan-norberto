import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearMascotaComponent } from './pantallas/crear-mascota/crear-mascota.component';
import { CrearComponent } from './pantallas/crear/crear.component';
import { EditarMascotaComponent } from './pantallas/editar-mascota/editar-mascota.component';
import { EditarComponent } from './pantallas/editar/editar.component';
import { LeerComponent } from './pantallas/leer/leer.component';
import { NoEncontradaComponent } from './pantallas/no-encontrada/no-encontrada.component';

const routes: Routes = [
  {path:'', redirectTo:'leer', pathMatch:'full'},
  {path:'leer', component: LeerComponent},
  {path:'crear', component: CrearComponent},
  {path:'editar/:id', component: EditarComponent},
  {path:'editarMascota/:idParent/:idChildren', component: EditarMascotaComponent},
  {path:'crearMascota', component: CrearMascotaComponent},
  {path: '**', component: NoEncontradaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

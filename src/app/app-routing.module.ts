import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { AuthGuard } from './Guards/auth.guard';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { TrabajadorComponent } from './trabajador/trabajador.component';
import { TrabajadoresComponent } from './trabajadores/trabajadores.component';

const routes: Routes = [
  {path:"",component:InicioComponent},
  {path:"trabajadores", component:TrabajadoresComponent,
    canActivate:[AuthGuard]
},
  {path:"trabajadores/:id", component:TrabajadorComponent},
  {path:"**", redirectTo:"/"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

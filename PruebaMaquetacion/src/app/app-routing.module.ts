import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component'
import { MesesAbRecComponent } from './components/meses-ab-rec/meses-ab-rec.component';
import { DeclaracionesComponent } from './pages/declaraciones/declaraciones.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  
  {path: "", pathMatch: "full", redirectTo: "declaraciones"},
  {path: "navbar",  component: NavBarComponent},
  {path: "declaraciones", component: DeclaracionesComponent},
  {path: "inicio", component: InicioComponent},
  {path: "mesesAbRec", component: MesesAbRecComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

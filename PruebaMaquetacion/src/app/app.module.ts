import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MesesAbRecComponent } from './components/meses-ab-rec/meses-ab-rec.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DeclaracionesComponent } from './pages/declaraciones/declaraciones.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MesesAbRecComponent,
    InicioComponent,
    DeclaracionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

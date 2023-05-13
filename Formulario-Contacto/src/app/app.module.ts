import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearcontactoComponent } from './Modulos/crearcontacto/crearcontacto.component';
import { CabeceraComponent } from './Modulos/cabecera/cabecera.component';
import { MenuComponent } from './Modulos/menu/menu.component';
import { PiedepaginaComponent } from './Modulos/piedepagina/piedepagina.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearcontactoComponent,
    CabeceraComponent,
    MenuComponent,
    PiedepaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

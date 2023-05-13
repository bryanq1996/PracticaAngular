import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CrearcontactoComponent } from './Modulos/crearcontacto/crearcontacto.component';
import { CabeceraComponent } from './Modulos/cabecera/cabecera.component';
import { MenuComponent } from './Modulos/menu/menu.component';
import { PiedepaginaComponent } from './Modulos/piedepagina/piedepagina.component';
import { Texto1Component } from './Modulos/texto1/texto1.component';
import { Texto2Component } from './Modulos/texto2/texto2.component';
import { Texto3Component } from './Modulos/texto3/texto3.component';
import { ListarcontactoComponent } from './Modulos/listarcontacto/listarcontacto.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearcontactoComponent,
    CabeceraComponent,
    MenuComponent,
    PiedepaginaComponent,
    Texto1Component,
    Texto2Component,
    Texto3Component,
    ListarcontactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

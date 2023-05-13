import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { CrearcontactoComponent } from './Modulos/crearcontacto/crearcontacto.component';
import { CabeceraComponent } from './Modulos/cabecera/cabecera.component';
import { MenuComponent } from './Modulos/menu/menu.component';
import { PiedepaginaComponent } from './Modulos/piedepagina/piedepagina.component';
import { Texto1Component } from './Modulos/texto1/texto1.component';
import { Texto2Component } from './Modulos/texto2/texto2.component';
import { Texto3Component } from './Modulos/texto3/texto3.component';
import { ListarcontactoComponent } from './Modulos/listarcontacto/listarcontacto.component';


const routes: Routes = [
  {path: "paginas/cabecera", component: CabeceraComponent},
  {path: "paginas/menu", component: MenuComponent},
  {path: "paginas/piepagina", component: PiedepaginaComponent},
  {path: "paginas/crearcontacto", component: CrearcontactoComponent},

  {path: "paginas/listarcontacto", component: ListarcontactoComponent},

  {path: "paginas/texto1", component: Texto1Component},
  {path: "paginas/texto2", component: Texto2Component},

  {path: "paginas/texto3", component: Texto3Component}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }

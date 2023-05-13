import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Contacto } from 'src/app/domain/contacto';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-listarcontacto',
  templateUrl: './listarcontacto.component.html',
  styleUrls: ['./listarcontacto.component.css']
})
export class ListarcontactoComponent {
  listadoContactos: Contacto[] = []

  constructor(private contactoService: ContactoService,
      private router: Router) {
    this.listadoContactos = contactoService.getList()
    console.log('listadoContactos', this.listadoContactos)
  }

  editar(contacto: Contacto){
    console.log(contacto)
    let params: NavigationExtras = {
      queryParams: {
        contacto: contacto,
        nombre: 'Cristian'
      }
    }
    this.router.navigate(['paginas/nuevo-contacto'], params)
  }

  eliminar(contacto: Contacto) {

  }

}

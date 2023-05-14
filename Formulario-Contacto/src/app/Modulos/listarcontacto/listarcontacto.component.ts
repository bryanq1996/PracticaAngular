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
      queryParams: contacto
    }
     /* this.router.navigate(['paginas/editarcontacto'], {
      state: { contactoDetails: params }
    }) */
  }

  eliminar(contacto: Contacto) {
    if(window.confirm('Deseas Eliminar ?')){
      if(this.contactoService.delete(contacto)){
        console.log('exito');
        this.listadoContactos = this.contactoService.getList();
      }else{
        console.log('no exito');

      }
    }


  }

}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/app/domain/contacto';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-editarcontacto',
  templateUrl: './editarcontacto.component.html',
  styleUrls: ['./editarcontacto.component.css'],
})
export class EditarcontactoComponent {
  getcontact: any;
  contact: Contacto = new Contacto();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactoService: ContactoService
  ) {
    this.getcontact = router.getCurrentNavigation()?.extras.state;
    this.contact = this.getcontact.contactoDetails.queryParams;
    if (contactoService.getList().length == 0) {
      router.navigate(['paginas/listarcontacto']);
    }

  }

  edit(contacto: Contacto): void {

    if (this.contactoService.edit(contacto)) {
      this.router.navigate(['paginas/listarcontacto']);
    }
  }
}

import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/app/domain/contacto';
import { ContactoService } from 'src/app/services/contacto.service';
@Component({
  selector: 'app-crearcontacto',
  templateUrl: './crearcontacto.component.html',
  styleUrls: ['./crearcontacto.component.css']
})
export class CrearcontactoComponent {

  contacto: Contacto = new Contacto();

  constructor(private contactoService: ContactoService) {}

  guardar() {
    console.log(this.contacto)
    this.contactoService.save(this.contacto)
    this.contacto = new Contacto()
  }

}

import { Injectable } from '@angular/core';
import { Contacto } from '../domain/contacto';

@Injectable({
  providedIn: 'root',
})
export class ContactoService {
  contactos: Contacto[] = [
    /*{
      cedula: '010562',
      nombre: 'sdssd',
      direccion: 'sdsds',
    },
    {
      cedula: '0104534',
      nombre: 'jori mase',
      direccion: 'calle vieja y alamra',
    },
    {
      cedula: '01008977',
      nombre: 'maria peres',
      direccion: 'huyacapa',
    },
    {
      cedula: '0199089089',
      nombre: 'pedro',
      direccion: 'gran colombia',
    },*/
  ];

  constructor() {}

  save(contacto: Contacto): void {
    this.contactos.push(contacto);
    console.log(this.contactos);
  }

  getList(): Contacto[] {
    return this.contactos;
  }

  edit(contacto: Contacto): boolean {
    console.log(contacto);
    console.log(this.contactos.indexOf(contacto));
    if (this.contactos.indexOf(contacto) > -1) {
      this.contactos[this.contactos.indexOf(contacto)] = contacto;
      return true;
    }
    return false;
  }

  delete(contacto: Contacto): boolean{
    console.log('eliminar');
    console.log(contacto);
    if (this.contactos.indexOf(contacto) > -1) {
      this.contactos.splice(this.contactos.indexOf(contacto), 1);
      return true;
    }
    return false;




  }
}

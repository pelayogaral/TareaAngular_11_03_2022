import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
})
export class ciudadesComponent {
  ciudades: string[] = [];
  ciudadesBorradas: string[] = [];
  inicializarCiudades(): void
  {
    this.ciudades = [
      'Avilés',
      'Gijón',
      'Oviedo',
      'Salinas',
      'Cudillero'
    ];
  }
  borrarCiudad(index:number): void
  {
    this.ciudadesBorradas.push(this.ciudades[index]);
    this.ciudades.splice(index, 1);

  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.component.html',
})
export class ComidasComponent {
  comidas: string[] = [
    'Arroz',
    'Pasta',
    'Filete',
    'Ensalada',
    'Helado'
  ];

  borrarComidas(): void
  {
    this.comidas = [];

  }
}

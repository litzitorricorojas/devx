import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'devx-material-buttons',
  templateUrl: './material-buttons.component.html',
  styleUrls: ['./material-buttons.component.css']
})
export class MaterialButtonsComponent implements OnInit {

  curso: {titulo: string, duracion: number, codigo: string} = {
    titulo: 'Angular',
    duracion: 2,
    codigo: 'NG-1'
  };

  cursoAngular = 'Angular';

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.cursoAngular = 'TypeScript';
      this.curso = {
        titulo: 'JavaScript',
        duracion: 3,
        codigo: 'JS-0'
      };
    }, 5000);
  }

}

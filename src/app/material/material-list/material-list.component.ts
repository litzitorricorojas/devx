import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'devx-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {
  curso = [
    {
      code: 'NG',
      name: 'Angular',
      duration: 2,
      active: true
    },
    {
      code: 'JS',
      name: 'JavaScript',
      duration: 2,
      active: false
    },
    {
      code: 'TS',
      name: 'TypeScript',
      duration: 1,
      active: true
    }
  ];

  constructor() { }

  // Inicializa el Componente Angular
  ngOnInit() {
    setTimeout(() => {
      this.curso = [
        {
          code: 'Node',
          name: 'Node.js',
          duration: 2,
          active: true
        }
      ];
    }, 15000); // milliseconds
  }

  selectedCurso(curso: any) {
    console.log('[material-list]curso: ', curso);
  }
}

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'devx-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  @Input()
  curso: any;

  @Input()
  active: boolean

  // Emite, dispara eventos :-)
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  click(curso: any) {
    console.log('Click: ', curso.name);
    // Propaga el objeto curso a quien espera recibirlo
    this.onClick.emit(curso);
  }
}

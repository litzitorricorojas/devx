import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'devx-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.css']
})
export class MaterialInputComponent implements OnInit {

  holaMundo = 'Hello World';

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.holaMundo = 'Bienvenidos!';
    }, 5000);
  }

  doLogin() {
    console.log('CLick en Login');
  }

  keyUp($event) {
    console.log('keyUp', $event);
  }

  blur($event){
    console.log('blur', $event);
  }

}


import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: any ;
  constructor(private router: Router) {
    this.model = {
      'username': '',
      'password': ''
    };
  }
  onSubmit() {
      this.router.navigate(['/stories']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Storie } from '../shared/model/model';
import { Router } from '@angular/router';

@Component({
  selector: 'devx-stories-new',
  templateUrl: './stories-new.component.html',
  styleUrls: ['./stories-new.component.css']
})
export class StoriesNewComponent implements OnInit {
  model: Storie;

  constructor(private router: Router) { }

  ngOnInit() {
    this.model = {
      'userId': '',
      'id': '',
      'title': '',
      'thumbnailUrl': '',
      'url': '',
      'description': ''
    };
  }


  onSubmit() {
    console.log(this.model);
  }

  onCancel() {
    console.log('cancel');
    this.router.navigate(['/stories']);
  }

}

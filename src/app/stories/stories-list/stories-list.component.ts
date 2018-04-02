import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Storie } from '../shared/model/model';
import { StorieService } from '../shared/services/storie.service';

@Component({
  selector: 'devx-stories-list',
  templateUrl: './stories-list.component.html',
  styleUrls: ['./stories-list.component.css']
})
export class StoriesListComponent implements OnInit {
  storie: Storie[];

  constructor(private service: StorieService,
      private router: Router) {
  }
  ngOnInit() {
     this.service.getGifs().subscribe((result: any) => {
        this.storie = result;
        console.log(this.storie);
     }, (error: any) => {
       console.log('error');
     });
  }

  addStorie(): void {
    this.router.navigate(['/new']);
  }

}

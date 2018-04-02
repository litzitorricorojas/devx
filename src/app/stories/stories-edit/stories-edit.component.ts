import { Component, OnInit } from '@angular/core';
import { Storie } from '../shared/model/model';
import { StorieService } from '../shared/services/storie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'devx-stories-edit',
  templateUrl: './stories-edit.component.html',
  styleUrls: ['./stories-edit.component.css']
})
export class StoriesEditComponent implements OnInit {

  storie: any;

  constructor(private service: StorieService,
    private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(params => {
      console.log('params', params);
        this.service.getGif(params.id)
          .subscribe(result => this.storie = result);
    });
  }

}

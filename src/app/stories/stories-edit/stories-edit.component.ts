import { Component, OnInit } from '@angular/core';
import { Storie } from '../shared/model/model';
import { StorieService } from '../shared/services/storie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'devx-stories-edit',
  templateUrl: './stories-edit.component.html',
  styleUrls: ['./stories-edit.component.css']
})
export class StoriesEditComponent implements OnInit {

  storie: any;
  model: Storie;

  constructor(private service: StorieService,
    private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(params => {
      console.log('params', params);
        this.service.getGif(params.id)
          .subscribe(result => this.storie = result);
    });
  }
  onCancel() {
    console.log('cancel');
    this.router.navigate(['/stories']);
  }

}

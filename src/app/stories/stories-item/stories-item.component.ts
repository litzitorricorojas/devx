import { Component, OnInit , Input} from '@angular/core';
import { Storie } from '../shared/model/model';
import { Router } from '@angular/router';

@Component({
  selector: 'devx-stories-item',
  templateUrl: './stories-item.component.html',
  styleUrls: ['./stories-item.component.css']
})
export class StoriesItemComponent implements OnInit {

  @Input() source: Storie;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
  editGiphy(storie: Storie): void {
    this.router.navigate(['/edit', storie.id]);
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../material/material.module';

import { StoriesListComponent } from '../stories/stories-list/stories-list.component';
import { StoriesEditComponent } from '../stories/stories-edit/stories-edit.component';
import { StoriesNewComponent } from '../stories/stories-new/stories-new.component';

import { StorieService } from '../stories/shared/services/storie.service';
import { StoriesItemComponent } from '../stories/stories-item/stories-item.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule
  ],
  declarations: [StoriesListComponent, StoriesEditComponent, StoriesNewComponent, StoriesItemComponent],
  providers: [StorieService]
})
export class StoriesModule { }

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { StoriesListComponent } from './stories/stories-list/stories-list.component';
import { StoriesEditComponent } from './stories/stories-edit/stories-edit.component';
import { StoriesNewComponent } from './stories/stories-new/stories-new.component';

const routes: Routes = [
  {
    path: 'stories',
    component: StoriesListComponent,
    data: { title: 'Stories List' }
  },
  {
    path: '',
    redirectTo: '/stories',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'edit/:id', component: StoriesEditComponent },
  { path: 'new', component: StoriesNewComponent }

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

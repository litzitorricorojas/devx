import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { StoriesModule } from './stories/stories.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    MaterialModule,
    StoriesModule,
    LoginModule
  ],
  providers: [LoginModule, StoriesModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

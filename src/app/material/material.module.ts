import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule} from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MaterialButtonsComponent } from './material-buttons/material-buttons.component';
import { MaterialInputComponent } from './material-input/material-input.component';
import { MaterialListComponent } from './material-list/material-list.component';
import { CursoComponent } from './material-list/curso/curso.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatGridListModule
  ],
  exports: [
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatGridListModule
  ],
  declarations: [MaterialButtonsComponent, MaterialInputComponent, MaterialListComponent, CursoComponent]
})
export class MaterialModule { }

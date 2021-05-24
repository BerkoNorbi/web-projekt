import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMemberComponent } from './add-member.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    AddMemberComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,MatDialogModule,
    MatFormFieldModule

  ],
  exports: [
    AddMemberComponent
  ],
})
export class AddMemberModule { }

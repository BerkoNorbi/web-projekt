import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { GroupCardComponent } from './group-card.component';



@NgModule({
  declarations: [GroupCardComponent],
  imports: [
    CommonModule, MatCardModule
  ],
  exports:[GroupCardComponent]
})
export class GroupCardModule { }

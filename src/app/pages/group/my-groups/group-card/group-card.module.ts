import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { GroupCardComponent } from './group-card.component';
import { AddMemberModule } from '../add-member/add-member.module';



@NgModule({
  declarations: [GroupCardComponent],
  imports: [
    CommonModule, MatCardModule, AddMemberModule
  ],
  exports:[GroupCardComponent]
})
export class GroupCardModule { }

import { GroupCardModule } from './../../../group/my-groups/group-card/group-card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyGroupComponent } from './my-group.component';
import { FormsModule } from '@angular/forms';
import { NavModule } from '../../../nav/nav.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GroupAddModule } from './../../../group/my-groups/group-add/group-add.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ContainerModule } from './../../../../shared/components/container/container.module';
import { MyGroupRoutingModule } from './my-group-routing.module';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [MyGroupComponent],
  imports: [
    CommonModule, MatCardModule,GroupCardModule,GroupAddModule,
    MatIconModule,ContainerModule,MatDialogModule,MatButtonModule,NavModule
    ,MyGroupRoutingModule
    
  ],
  exports: [MyGroupComponent],
})
export class MyGroupModule { }



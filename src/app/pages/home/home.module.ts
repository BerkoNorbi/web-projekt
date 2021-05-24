import { GroupCardModule } from './../group/group-card/group-card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { LoginModule } from '../login/login.module';
import { RegistrationModule } from '../registration/registration.module';
import { NavModule } from '../nav/nav.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GroupAddModule } from '../group/my-groups/group-add/group-add.module';
import { MatDialogModule } from '@angular/material/dialog';
import { HomeRoutingModule } from './home-routing.module';
import { ContainerModule } from './../../shared/components/container/container.module';




@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, HomeRoutingModule, FormsModule, GroupCardModule, LoginModule,
    RegistrationModule, NavModule, MatButtonModule,
    MatIconModule, GroupAddModule, MatDialogModule,ContainerModule

  ],

  exports: [HomeComponent]
})
export class HomeModule { }

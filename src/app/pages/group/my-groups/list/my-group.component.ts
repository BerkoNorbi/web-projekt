import { Component, OnInit } from '@angular/core';
import { Groups } from './../../../../shared/database/group.database';
import { MatDialog } from '@angular/material/dialog';
import { GroupAddComponent } from './../../../group/my-groups/group-add/group-add.component';
import { group } from '@angular/animations';
import { FbBaseService } from './../../../../services/fb-base.service';
import { Observable } from 'rxjs';
import { Group } from './../../../../shared/models/group.model';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-my-group',
  templateUrl: './my-group.component.html',
  styleUrls: ['./my-group.component.scss']
})
export class MyGroupComponent implements OnInit {
  groups: Observable<Group[]> | null = null;
  users: Observable<User[]> | null = null;
  name : string ='';
  
  
 

  constructor (private dialog: MatDialog, private service: FbBaseService<Group>,private authService: AuthService,private serviceuser: FbBaseService<User>) { }

  ngOnInit(): void
  {
    this.getGroups();
    this.getUser();
  }

  getGroups(): void {
    this.groups = this.service.getplus('groups',this.authService.currentUserId );
  }

  getUser(): void {

    this.serviceuser.get_name_of_user_asd('User',this.authService.currentUseremail).subscribe(result => {
      this.name = result[0].name });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(GroupAddComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((group: Group) => {
      group.managingEntityid = this.authService.currentUserId;
      group.managingEntity = this.name;

  
      if (group?.name) {
        
        this.service.add('groups', group);
      }
    }, err => {
      console.warn(err);
    });
  }

}
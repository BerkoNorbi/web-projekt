import { Component, OnInit } from '@angular/core';
import { Groups } from './../../shared/database/group.database';
import { MatDialog } from '@angular/material/dialog';
import { GroupAddComponent } from '../group/my-groups/group-add/group-add.component';
import { group } from '@angular/animations';
import { FbBaseService } from './../../services/fb-base.service';
import { Observable } from 'rxjs';
import { Group } from './../../shared/models/group.model';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  groups: Observable<Group[]> | null = null;

  constructor (private dialog: MatDialog, private service: FbBaseService<Group>) { }

  ngOnInit(): void
  {
    this.getGroups();
  }

  getGroups(): void {
    this.groups = this.service.get('groups');
  }





}

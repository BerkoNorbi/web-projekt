import { Component, OnInit, Input } from '@angular/core';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Group } from '../../../../shared/models/group.model';
import { MatDialog } from '@angular/material/dialog';
import { AddMemberComponent } from '../add-member/add-member.component';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.scss']
})
export class GroupCardComponent implements OnInit {
  @Input() group?: Group;

  constructor(private service: FbBaseService<Group> ,private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  delete(): void {
    if (this.group !== undefined)
    {
      this.service.delete('groups' , this.group.id)
    }
  }


  opendialog(): void {
    const dialogRef = this.dialog.open(AddMemberComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((name: string) => {
      



      console.log(name);
      if(this.group !== undefined){
        this.group?.members.push(name);
        this.group.quantity = this.group.quantity+1;
        this.service.update('groups', this.group);
      }
      
      
    }, err => {
      console.warn(err);
    });
  }
}

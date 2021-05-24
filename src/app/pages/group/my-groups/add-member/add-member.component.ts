import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Group } from 'src/app/shared/models/group.model';
import { AuthService } from 'src/app/services/auth.service';
import { group } from '@angular/animations';








@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})



export class AddMemberComponent implements OnInit {

  @Input() group?: Group;

  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    
  });
  constructor(private dialog: MatDialog, private service: FbBaseService<Group>, private authService: AuthService) { }

  ngOnInit(): void {
  }


}

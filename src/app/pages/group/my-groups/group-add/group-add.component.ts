import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Group } from 'src/app/shared/models/group.model';
import { AuthService } from 'src/app/services/auth.service';








@Component({
  selector: 'app-group-add',
  templateUrl: './group-add.component.html',
  styleUrls: ['./group-add.component.scss']
})



export class GroupAddComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    active:  new FormControl('yes'),
    type: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    quantity:  new FormControl(0),
    managingEntity:  new FormControl('Berkó Norbert'),
    managingEntityid:  new FormControl(''),
    members:  new FormArray([]),
  });
  constructor(private dialog: MatDialog, private service: FbBaseService<Group>, private authService: AuthService) { }

  ngOnInit(): void {
  }



}

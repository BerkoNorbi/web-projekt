import { Component, OnInit, Input } from '@angular/core';
import { Group } from '../../../shared/models/group.model';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.scss']
})
export class GroupCardComponent implements OnInit {
  @Input() group?: Group;

  constructor() { }




  
  ngOnInit(): void {
  }

}

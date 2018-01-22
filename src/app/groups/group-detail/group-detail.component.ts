import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Group} from '../../classes/group';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {
  selectedGroup:any;

  constructor(private ActivatedRoute:ActivatedRoute, private Location: Location, private Group:Group) { }

  ngOnInit() {
    this.selectedGroup = this.Group.selectedGroup;
    this.selectedGroup.dateCreated = this.getCreatedDate(this.selectedGroup.created);
  }

  goBack(): void {
    this.Location.back();
  }

  getCreatedDate(created:number)
  {
    let d: Date  = new Date(created);
    return d.getDate() + "/" + (Number(d.getMonth())+1) + "/" + d.getFullYear();
  }
}

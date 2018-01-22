import { Component, OnInit } from '@angular/core';
import {MeetupService} from '../services/meetup.service';
import {Global} from '../classes/global';
import { Group } from '../classes/group';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {


  groups = [];
  secondarySelectedCategories = [];

  constructor(private MeetupService: MeetupService, private Global: Global,  private Group:Group) {}


  ngOnInit() {
    if(this.Global.secondaryCategories.length > 0)
    {
      let secondaryCategoriesTemp = this.Global.secondaryCategories.slice(0);
      for(let category of this.Global.categoryArray)
      {
        if(secondaryCategoriesTemp.indexOf(category.id) != -1)
        {
          this.secondarySelectedCategories.push({id:category.id,name:category.name});

          secondaryCategoriesTemp.splice(secondaryCategoriesTemp.indexOf(category.id), 1);
          if(secondaryCategoriesTemp.length <= 0)
          { 
            break; 
          }
        }

      }
    }
  }

  getGroups() {
    let categoryIDlist: string = this.Global.selectedCategory.id.toString();
    if(this.Global.secondaryCategories.length != 0)  
    {
      for (let categoryid of this.Global.secondaryCategories) 
      {
        categoryIDlist += "," + categoryid.toString();
      }
    }

    this.MeetupService.getGroups(categoryIDlist).then(response => {

      this.groups = response;
    });

  }

  setSelectedGroup(group)
  {
    this.Group.selectedGroup = group;
  }
}


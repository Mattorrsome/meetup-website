import { Component, OnInit, Input } from "@angular/core";
import {MeetupService} from '../services/meetup.service';
import {Category} from '../classes/category';
import {Global} from '../classes/global';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit  {

  constructor(private MeetupService: MeetupService, private Global : Global) { }

  ngOnInit() {

    let self = this;
    if(this.Global.categoryArray.length == 0)
    {
      this.MeetupService.getCategories().then(response => {
        self.Global.categoryArray =  response.results;
      });
    }
  }

  onSelect(category): void {
    this.Global.selectedCategory = category;
    this.Global.secondaryCategories = [];
  }

}

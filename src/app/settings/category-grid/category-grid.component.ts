import { Component, OnInit, Input} from '@angular/core';
import {Global} from '../../classes/global';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category-grid',
  templateUrl: './category-grid.component.html',
  styleUrls: ['./category-grid.component.css']
})
export class CategoryGridComponent implements OnInit {

  @Input() selectedCategory: any;

  constructor(private Global:Global,  private Location: Location) { }

  ngOnInit() {
  
  }


  onSelect(category): void {
    if(this.Global.selectedCategory == category)
    { return }
    else if(this.Global.secondaryCategories.indexOf(category.id) == -1)
    {
      this.Global.secondaryCategories.push(category.id);
    }
    else
    {
      this.Global.secondaryCategories.splice(this.Global.secondaryCategories.indexOf(category.id), 1);
    }
  }
  
  isSecondarySelected(category)
  {
    if(this.Global.secondaryCategories.indexOf(category.id) == -1 || this.Global.selectedCategory == category)
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  goBack(): void {
    this.Location.back();
  }

}

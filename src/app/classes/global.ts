import { Injectable } from '@angular/core';

@Injectable()
export class Global {

  selectedCategory: any;
  secondaryCategories : number[] = [];

  categoryArray : any[] = [];
}
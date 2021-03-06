import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { SettingsComponent } from './settings/settings.component';
import { GroupsComponent } from './groups/groups.component';
import {CategoryGridComponent} from './settings/category-grid/category-grid.component';
import {GroupDetailComponent} from './groups/group-detail/group-detail.component'

const routes: Routes = [
  { path: 'settings', component: SettingsComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'secondaryCategories', component: CategoryGridComponent }, 
  { path: 'groupDetail', component:GroupDetailComponent},
  { path: '', redirectTo: '/settings', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) 
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

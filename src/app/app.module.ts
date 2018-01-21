import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GroupsComponent } from './groups/groups.component';
import { SettingsComponent } from './settings/settings.component';
import { GroupDetailComponent } from './groups/group-detail/group-detail.component';
import { CategoryGridComponent } from './settings/category-grid/category-grid.component';

import { AppRoutingModule } from './/app-routing.module';

import {MeetupService} from './services/meetup.service';

import {Global} from './classes/global';


@NgModule({
  declarations: [
    AppComponent,
    GroupsComponent,
    SettingsComponent,
    GroupDetailComponent,
    CategoryGridComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [MeetupService, Global],
  bootstrap: [AppComponent]
})
export class AppModule { }

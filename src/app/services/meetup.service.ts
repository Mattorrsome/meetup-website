import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()

export class MeetupService {

  private url = `/api`;
  private key = `?key=${environment.apiKey}&sign=true`;

  constructor(private http: HttpClient) { }

    getCategories(): Promise<any> {
        return this.http.get<any>(this.url + '/2/categories' + this.key)
        .toPromise();
    };

    getGroups(categoryIds : string): Promise<any> {
        return this.http.get<any>(this.url + '/find/groups'  + this.key + '&category=' + categoryIds)
        .toPromise();
    }


}